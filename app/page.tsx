"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const font = 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';

  const unlock = () => {
    setAccess(true);
  };

  const joinDrop = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setSubmitting(true);
    setMessage("Joining...");

    try {
      const response = await fetch("https://formspree.io/f/moevqvjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          message: "GrabitUK mailing list signup",
        }),
      });

      if (response.ok) {
        setMessage("✓ YOU'RE ON THE LIST");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* =========================
     SECRET ACCESS SCREEN
  ========================= */

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
            boxShadow: "0 25px 70px rgba(0,0,0,0.65)",
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

  /* =========================
     MAIN WEBSITE
  ========================= */

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
          minHeight: "620px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "65px 20px 55px",
          boxSizing: "border-box",
          background:
            "radial-gradient(circle at 50% 25%, #112017 0%, #090b09 42%, #070807 75%)",
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
            margin: "20px 0 7px",
            color: "#00e67a",
            fontSize: "clamp(18px, 4vw, 26px)",
            fontWeight: 700,
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            margin: "0 0 35px",
            color: "#858985",
            fontSize: "14px",
          }}
        >
          The fun side of tech.
        </p>

        {/* MAILING LIST NOW HIGH UP */}

        <div
          style={{
            width: "100%",
            maxWidth: "650px",
            padding: "28px",
            boxSizing: "border-box",
            background: "rgba(9, 12, 10, 0.85)",
            border: "1px solid #242a26",
          }}
        >
          <p
            style={{
              color: "#00e67a",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 9px",
            }}
          >
            GRABITUK MEMBERS
          </p>

          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            Get in on the next drop.
          </h2>

          <p
            style={{
              color: "#858985",
              fontSize: "13px",
              lineHeight: 1.5,
              margin: "0 0 20px",
            }}
          >
            Sign up for exclusive product drops, subscriber discounts
            and GrabitUK news.
          </p>

          <form
            onSubmit={joinDrop}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              placeholder="Email address"
              aria-label="Email address"
              style={{
                flex: "1 1 300px",
                minWidth: 0,
                padding: "15px",
                boxSizing: "border-box",
                background: "#050605",
                border: "1px solid #303431",
                color: "#fff",
                fontFamily: font,
                fontSize: "14px",
                outline: "none",
              }}
            />

            <button
              type="submit"
              disabled={submitting}
              style={{
                flex: "1 1 155px",
                padding: "15px 22px",
                border: "none",
                background: submitting ? "#64776c" : "#00e67a",
                color: "#020302",
                fontFamily: font,
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "JOINING..." : "JOIN THE LIST"}
            </button>
          </form>

          <p
            style={{
              margin: "12px 0 0",
              color: "#555b57",
              fontSize: "9px",
              lineHeight: 1.5,
            }}
          >
            By joining, you agree to receive GrabitUK marketing emails,
            product news and offers. You can unsubscribe at any time.
          </p>

          {message && (
            <p
              style={{
                margin: "14px 0 0",
                color: "#00e67a",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </section>

      {/* PRIVACY / GRAPHENEOS */}

      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "70px 20px 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            background: "#0c0e0d",
            border: "1px solid #222623",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              minHeight: "330px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at center, #17271e, #090b0a 68%)",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  margin: "0 auto 18px",
                  border: "1px solid #29533b",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00e67a",
                  fontSize: "44px",
                  fontWeight: 800,
                }}
              >
                G
              </div>

              <div
                style={{
                  color: "#d9ddda",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                }}
              >
                GRAPHENEOS
              </div>

              <div
                style={{
                  color: "#5d645f",
                  fontSize: "10px",
                  marginTop: "7px",
                }}
              >
                PRIVACY-FOCUSED ANDROID OS
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "45px 35px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "#00e67a",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "3px",
                margin: "0 0 10px",
              }}
            >
              PRIVACY PHONES
            </p>

            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "clamp(27px, 5vw, 38px)",
                fontWeight: 750,
                letterSpacing: "-1px",
              }}
            >
              Google Pixel.
              <br />
              Privacy focused.
            </h2>

            <p
              style={{
                color: "#929793",
                fontSize: "14px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Selected Google Pixel devices configured with GrapheneOS,
              a privacy and security focused Android operating system.
            </p>

            <div
              style={{
                marginTop: "22px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {[
                "GrapheneOS",
                "Google Pixel",
                "Privacy",
                "Security",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "7px 10px",
                    border: "1px solid #242a26",
                    background: "#090b0a",
                    color: "#8e948f",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p
          style={{
            color: "#454a46",
            fontSize: "9px",
            lineHeight: 1.5,
            margin: "10px 0 0",
          }}
        >
          GrabitUK is an independent seller and is not affiliated with
          or endorsed by GrapheneOS or Google.
        </p>
      </section>

      {/* MODDED DEVICES */}

      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "30px 20px 75px",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#00e67a",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 9px",
            }}
          >
            CUSTOM HARDWARE
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 5vw, 38px)",
              fontWeight: 750,
            }}
          >
            Modded Devices
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {/* NINTENDO HANDHELDS */}

          <div
            style={{
              background: "#0c0e0d",
              border: "1px solid #222623",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "270px",
                background:
                  "radial-gradient(circle at center, #181c19, #090a09 70%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "82px",
                }}
              >
                🎮
              </div>
            </div>

            <div
              style={{
                padding: "27px",
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
                HANDHELDS
              </p>

              <h3
                style={{
                  margin: "0 0 11px",
                  fontSize: "22px",
                }}
              >
                Nintendo DS Family
              </h3>

              <p
                style={{
                  color: "#8d918e",
                  margin: 0,
                  lineHeight: 1.65,
                  fontSize: "13px",
                }}
              >
                Custom Nintendo DS, 2DS and 3DS family devices with
                personalised themes, homebrew setups and customisation.
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
                height: "270px",
                background:
                  "radial-gradient(circle at center, #17221b, #090a09 70%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "78px",
                  color: "#00e67a",
                }}
              >
                ⚡
              </div>
            </div>

            <div
              style={{
                padding: "27px",
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
                  margin: "0 0 11px",
                  fontSize: "22px",
                }}
              >
                Custom Tech
              </h3>

              <p
                style={{
                  color: "#8d918e",
                  margin: 0,
                  lineHeight: 1.65,
                  fontSize: "13px",
                }}
              >
                Accessories, custom setups and personalised technology
                for people who want something different.
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            color: "#454a46",
            fontSize: "9px",
            lineHeight: 1.5,
            margin: "10px 0 0",
          }}
        >
          Nintendo product names are used only to identify compatible
          devices. GrabitUK is not affiliated with or endorsed by
          Nintendo.
        </p>
      </section>

      {/* CONTACT */}

      <footer
        style={{
          padding: "55px 20px 35px",
          textAlign: "center",
          background: "#050605",
          borderTop: "1px solid #1c1f1d",
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
            fontSize: "21px",
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
            marginBottom: "35px",
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
