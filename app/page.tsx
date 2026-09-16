"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const unlock = () => {
    setAccess(true);
  };

  const joinDrop = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Email signup will be available soon.");
  };

  const font =
    'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';

  /* ---------------- ACCESS SCREEN ---------------- */

  if (!access) {
    return (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          margin: 0,
          padding: "24px",
          boxSizing: "border-box",
          color: "#f5f5f5",
          fontFamily: font,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          /* Carbon-style background */
          backgroundColor: "#080a09",
          backgroundImage: `
            linear-gradient(45deg, #0d100e 25%, transparent 25%),
            linear-gradient(-45deg, #0d100e 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #0d100e 75%),
            linear-gradient(-45deg, transparent 75%, #0d100e 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition:
            "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "440px",
            padding: "46px 30px",
            boxSizing: "border-box",
            background:
              "linear-gradient(145deg, rgba(14,17,15,0.98), rgba(5,7,6,0.98))",
            border: "1px solid #343936",
            boxShadow:
              "0 25px 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.04)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 11px",
              border: "1px solid #183d2a",
              background: "#09120d",
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00e67a",
              }}
            />

            <span
              style={{
                color: "#00e67a",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              SYSTEM READY
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "clamp(38px, 9vw, 58px)",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            GRABITUK
          </h1>

          <div
            style={{
              width: "45px",
              height: "2px",
              background: "#00e67a",
              margin: "20px auto",
            }}
          />

          <p
            style={{
              margin: "0 0 8px",
              color: "#d0d0d0",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              margin: "0 0 25px",
              color: "#777",
              fontSize: "13px",
            }}
          >
            Enter your access key to continue
          </p>

          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") unlock();
            }}
            placeholder="ACCESS KEY"
            style={{
              width: "100%",
              padding: "16px",
              boxSizing: "border-box",
              background: "#050605",
              border: "1px solid #303431",
              color: "#00e67a",
              textAlign: "center",
              fontFamily: font,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "3px",
              outline: "none",
            }}
          />

          <button
            onClick={unlock}
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "16px",
              border: "none",
              background: "#00e67a",
              color: "#020302",
              fontFamily: font,
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            ENTER GRABITUK
          </button>

          <p
            style={{
              margin: "22px 0 0",
              color: "#4f5551",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            GRABITUK / PRIVATE ACCESS
          </p>
        </div>
      </main>
    );
  }

  /* ---------------- MAIN WEBSITE ---------------- */

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        background: "#070807",
        color: "#f4f4f4",
        fontFamily: font,
      }}
    >
      {/* HERO */}

      <section
        style={{
          minHeight: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px 40px",
          boxSizing: "border-box",
          background:
            "radial-gradient(circle at 50% 30%, #101a14 0%, #090b09 38%, #070807 70%)",
          borderBottom: "1px solid #1c1f1d",
        }}
      >
        <p
          style={{
            color: "#00e67a",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "4px",
            margin: "0 0 22px",
          }}
        >
          WELCOME TO GRABITUK
        </p>

        <h1
          style={{
            maxWidth: "900px",
            margin: 0,
            color: "#fff",
            fontSize: "clamp(42px, 8vw, 78px)",
            lineHeight: 0.98,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          TECH. PRIVACY.
          <br />
          MODS.
        </h1>

        <p
          style={{
            margin: "20px 0 8px",
            color: "#00e67a",
            fontSize: "clamp(18px, 4vw, 26px)",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            margin: 0,
            color: "#858985",
            fontSize: "14px",
          }}
        >
          The fun side of tech.
        </p>
      </section>

      {/* EXPLORE */}

      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "55px 20px 75px",
        }}
      >
        <div
          style={{
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#00e67a",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 9px",
            }}
          >
            OUR COLLECTION
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(27px, 5vw, 36px)",
              fontWeight: 750,
              letterSpacing: "-0.5px",
            }}
          >
            Explore GrabitUK
          </h2>
        </div>

        {/* PRIVACY PHONES */}

        <div
          style={{
            background: "#0c0e0d",
            border: "1px solid #222623",
            marginBottom: "22px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "310px",
              background:
                "radial-gradient(circle at center, #18231d, #0a0c0b 65%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "86px",
            }}
          >
            📱
          </div>

          <div
            style={{
              padding: "27px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#00e67a",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2px",
                margin: "0 0 8px",
              }}
            >
              PRIVACY
            </p>

            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
              Privacy Phones
            </h2>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "#8d918e",
                lineHeight: 1.6,
                fontSize: "14px",
              }}
            >
              Pixel devices configured with GrapheneOS privacy features and
              carefully selected settings.
            </p>
          </div>
        </div>

        {/* PRODUCT GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {/* MODDED DEVICES */}

          <div
            style={{
              background: "#0c0e0d",
              border: "1px solid #222623",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "250px",
                background:
                  "radial-gradient(circle at center, #161b18, #090a09 65%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "76px",
              }}
            >
              🎮
            </div>

            <div
              style={{
                padding: "25px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#00e67a",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  margin: "0 0 8px",
                }}
              >
                CUSTOM
              </p>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "21px",
                }}
              >
                Modded Devices
              </h3>

              <p
                style={{
                  color: "#8d918e",
                  margin: 0,
                  lineHeight: 1.6,
                  fontSize: "14px",
                }}
              >
                Custom handhelds with unique software, themes and personalised
                setups.
              </p>
            </div>
          </div>

          {/* CUSTOM TECH */}

          <div
            style={{
              background: "#0c0e0d",
              border: "1px solid #222623",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "250px",
                background:
                  "radial-gradient(circle at center, #161b18, #090a09 65%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "76px",
              }}
            >
              ⚡
            </div>

            <div
              style={{
                padding: "25px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#00e67a",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  margin: "0 0 8px",
                }}
              >
                GRABITUK
              </p>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "21px",
                }}
              >
                Custom Tech
              </h3>

              <p
                style={{
                  color: "#8d918e",
                  margin: 0,
                  lineHeight: 1.6,
                  fontSize: "14px",
                }}
              >
                Accessories and personalised technology for people looking for
                something different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}

      <section
        style={{
          padding: "75px 20px",
          borderTop: "1px solid #1c1f1d",
          borderBottom: "1px solid #1c1f1d",
          background:
            "radial-gradient(circle at center, #101a14 0%, #090b09 50%, #070807 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#00e67a",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 12px",
            }}
          >
            GRABITUK MEMBERS
          </p>

          <h2
            style={{
              margin: "0 0 13px",
              fontSize: "clamp(29px, 6vw, 42px)",
              fontWeight: 750,
              letterSpacing: "-1px",
            }}
          >
            Get in on the next drop.
          </h2>

          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto 28px",
              color: "#8d918e",
              lineHeight: 1.6,
              fontSize: "14px",
            }}
          >
            Sign up for exclusive GrabitUK product drops, subscriber discounts
            and selected news.
          </p>

          <form
            onSubmit={joinDrop}
            style={{
              maxWidth: "580px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              placeholder="Email address"
              aria-label="Email address"
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                padding: "17px",
                boxSizing: "border-box",
                background: "#080a09",
                border: "1px solid #303431",
                color: "#fff",
                fontFamily: font,
                fontSize: "14px",
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                flex: "1 1 160px",
                padding: "17px 24px",
                border: "none",
                background: "#00e67a",
                color: "#020302",
                fontFamily: font,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              JOIN THE LIST
            </button>
          </form>

          <p
            style={{
              maxWidth: "520px",
              margin: "14px auto 0",
              color: "#5d625e",
              fontSize: "10px",
              lineHeight: 1.6,
            }}
          >
            By joining the list, you agree to receive marketing emails from
            GrabitUK, including product news and offers. You can unsubscribe at
            any time.
          </p>

          {message && (
            <p
              style={{
                marginTop: "15px",
                color: "#00e67a",
                fontSize: "12px",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </section>

      {/* CONTACT */}

      <footer
        style={{
          padding: "50px 20px 35px",
          textAlign: "center",
          background: "#060706",
        }}
      >
        <p
          style={{
            color: "#666b67",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "3px",
            margin: "0 0 10px",
          }}
        >
          GET IN TOUCH
        </p>

        <h3
          style={{
            margin: "0 0 22px",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Contact GrabitUK
        </h3>

        <a
          href="mailto:Grabituk@proton.me"
          aria-label="Email GrabitUK"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
            border: "1px solid #2a2e2b",
            borderRadius: "50%",
            background: "#0b0d0c",
            color: "#00e67a",
            textDecoration: "none",
            fontSize: "22px",
            marginBottom: "16px",
          }}
        >
          ✉
        </a>

        <div
          style={{
            color: "#8d918e",
            fontSize: "13px",
            marginBottom: "32px",
          }}
        >
          Email:{" "}
          <a
            href="mailto:Grabituk@proton.me"
            style={{
              color: "#d7dad8",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Grabituk@proton.me
          </a>
        </div>

        <div
          style={{
            paddingTop: "25px",
            borderTop: "1px solid #171917",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#c9ccca",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            GRABITUK
          </div>

          <div
            style={{
              color: "#444844",
              fontSize: "9px",
              letterSpacing: "2px",
              marginTop: "7px",
            }}
          >
            TECH. PRIVACY. MODS.
          </div>
        </div>
      </footer>
    </main>
  );
}
