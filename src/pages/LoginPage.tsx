import { useEffect, useState, type CSSProperties, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "../context/AuthContext";

type AuthView = "login" | "register";

type LoginForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type FieldProps = {
  label?: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  Icon?: typeof EnvelopeIcon;
  onEnter?: () => void;
};

export default function LoginPage() {
  const { authView, setAuthView, login, register, isAuth } = useAuthContext();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setAuthView(params.get("tab") === "register" ? "register" : "login");
  }, [params, setAuthView]);

  useEffect(() => {
    if (isAuth) {
      navigate(params.get("from") || "/", { replace: true });
    }
  }, [isAuth, navigate, params]);

  const set = (key: keyof LoginForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [key]: value }));
    setError("");
  };

  const validate = () => {
    if (!form.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email address.";
    if (!form.password) return "Password is required.";
    if (authView === "register" && form.password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const result =
      authView === "register"
        ? register({
            email: form.email,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
          })
        : login({ email: form.email, password: form.password });

    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    if (authView === "register") {
      setSuccess("Account created! Redirecting...");
    }
  };

  const switchView = (view: AuthView) => {
    setAuthView(view);
    setError("");
    setSuccess("");
    setForm({ email: "", password: "", firstName: "", lastName: "" });
    navigate(view === "register" ? "/login?tab=register" : "/login", {
      replace: true,
    });
  };

  const isRegister = authView === "register";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-base)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(99,102,241,0.13) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(6,182,212,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 440,
          background: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-xl)",
          padding: "36px 40px 40px",
          position: "relative",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          animation: "fadeUp 0.35s ease forwards",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-md)",
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              color: "#fff",
              fontFamily: "var(--font-display)",
              margin: "0 auto 14px",
              boxShadow: "var(--shadow-glow-primary)",
            }}
          >
            N
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              fontWeight: 800,
              background:
                "linear-gradient(135deg, var(--primary-light), var(--accent-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 5,
            }}
          >
            {isRegister ? "Create your account" : "Welcome back"}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            {isRegister
              ? "Join the Nextcord community today."
              : "Sign in to access your account."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 0,
            marginBottom: 26,
            background: "var(--bg-overlay)",
            borderRadius: "var(--radius-md)",
            padding: 4,
          }}
        >
          {(["login", "register"] as AuthView[]).map((view) => (
            <button
              key={view}
              onClick={() => switchView(view)}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: "var(--radius-sm)",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                transition: "all 0.2s",
                background:
                  authView === view ? "var(--bg-elevated)" : "transparent",
                color:
                  authView === view ? "var(--text-primary)" : "var(--text-muted)",
                boxShadow:
                  authView === view ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            >
              {view === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {isRegister && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <Field
                label="First Name"
                placeholder="Alex"
                value={form.firstName}
                onChange={(event) => set("firstName", event.target.value)}
                Icon={UserIcon}
              />
              <Field
                label="Last Name"
                placeholder="Johnson"
                value={form.lastName}
                onChange={(event) => set("lastName", event.target.value)}
                Icon={UserIcon}
              />
            </div>
          )}

          <Field
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            value={form.email}
            onChange={(event) => set("email", event.target.value)}
            Icon={EnvelopeIcon}
            onEnter={handleSubmit}
          />

          <div>
            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative" }}>
              <LockClosedIcon
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 15,
                  height: 15,
                  color: "var(--text-muted)",
                  pointerEvents: "none",
                }}
              />
              <input
                className="input-base"
                type={showPw ? "text" : "password"}
                placeholder={isRegister ? "Min. 6 characters" : "Password"}
                value={form.password}
                onChange={(event) => set("password", event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
                style={{ paddingLeft: 38, paddingRight: 42 }}
              />
              <button
                onClick={() => setShowPw((current) => !current)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: 4,
                }}
                tabIndex={-1}
                title={showPw ? "Hide password" : "Show password"}
                type="button"
              >
                {showPw ? (
                  <EyeSlashIcon style={{ width: 15, height: 15 }} />
                ) : (
                  <EyeIcon style={{ width: 15, height: 15 }} />
                )}
              </button>
            </div>
            {isRegister && <PasswordStrength password={form.password} />}
          </div>

          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--red-dim)",
                border: "1px solid rgba(239,68,68,0.25)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 14px",
                fontSize: 13,
                color: "var(--red)",
              }}
            >
              <ExclamationCircleIcon
                style={{ width: 15, height: 15, flexShrink: 0 }}
              />
              {error}
            </div>
          )}

          {success && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--green-dim)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: "var(--radius-sm)",
                padding: "10px 14px",
                fontSize: 13,
                color: "var(--green)",
              }}
            >
              <CheckBadgeIcon style={{ width: 15, height: 15, flexShrink: 0 }} />
              {success}
            </div>
          )}

          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", padding: "12px 0", fontSize: 14, marginTop: 4 }}
          >
            {loading ? <Spinner /> : isRegister ? "Create Account" : "Sign In"}
          </button>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: "11px 14px",
            background: "var(--accent-dim)",
            border: "1px solid rgba(6,182,212,0.15)",
            borderRadius: "var(--radius-md)",
            fontSize: 12,
            color: "var(--accent-light)",
            textAlign: "center",
            lineHeight: 1.55,
          }}
        >
          <strong>Demo app</strong> - no real payment or verification required.
          <br />
          Register with any email and a password of 6+ characters.
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 18,
            fontSize: 13,
            color: "var(--text-muted)",
          }}
        >
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => switchView(isRegister ? "login" : "register")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--primary-light)",
              fontWeight: 600,
              fontSize: 13,
            }}
            type="button"
          >
            {isRegister ? "Sign in" : "Create one free"}
          </button>
        </p>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              fontSize: 12,
              textDecoration: "underline",
            }}
            type="button"
          >
            Continue browsing without an account
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  Icon,
  onEnter,
}: FieldProps) {
  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <div style={{ position: "relative" }}>
        {Icon && (
          <Icon
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              width: 15,
              height: 15,
              color: "var(--text-muted)",
              pointerEvents: "none",
            }}
          />
        )}
        <input
          className="input-base"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={
            onEnter
              ? (event) => {
                  if (event.key === "Enter") onEnter();
                }
              : undefined
          }
          style={{ paddingLeft: Icon ? 38 : 14 }}
        />
      </div>
    </div>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const score = !password
    ? 0
    : password.length < 6
      ? 1
      : password.length < 10
        ? 2
        : /[A-Z]/.test(password) && /[0-9]/.test(password)
          ? 4
          : 3;

  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "",
    "var(--red)",
    "var(--gold)",
    "var(--accent)",
    "var(--green)",
  ];

  if (!password) return null;

  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 99,
              background:
                index <= score ? colors[score] : "var(--border-default)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 11, color: colors[score] }}>
        {labels[score]}
      </span>
    </div>
  );
}

function Spinner() {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
      }}
    >
      <span
        style={{
          width: 14,
          height: 14,
          border: "2px solid rgba(255,255,255,0.35)",
          borderTop: "2px solid #fff",
          borderRadius: "50%",
          display: "inline-block",
          animation: "spin 0.7s linear infinite",
        }}
      />
      Processing...
    </span>
  );
}

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "var(--text-secondary)",
  marginBottom: 6,
  letterSpacing: "0.03em",
};
