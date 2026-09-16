"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const font = 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';

  /* =========================
     SECRET ACCESS
  ========================= */

  const unlock = () => {
    setAccess(true);
  };

  /* =========================
     EMAIL SIGNUP
  ========================= */

  const joinDrop = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setSubmitting(true);
    setMessage("Joining...");

    try {
      const response = await fetch(
        "https://formspree.io/f/moevqvjq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            message: "GrabitUK mailing list signup",
          }),
        }
      );

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
     ACCESS SCREEN
  ========================= */

  if (!access) {
    return (
      <main
        style={{
          minHeight: "100dvh",
          width: "100%",
          margin: 0,
          padding: "18px",
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
            maxWidth: "420px",
            padding: "40px 22px",
            boxSizing: "border-box",
            background:
              "linear-gradient(145deg, rgba(14,17,15,0.98), rgba(5,7,6,0.98))",
            border: "1px solid #343936",
            borderRadius: "12px",
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
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00e67a",
                boxShadow: "0 0 10px #00e67a",
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
              color: "#fff",
              fontSize: "clamp(36px, 12vw, 58px)",
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
              margin: "18px auto",
            }}
          />

          <p
            style={{
              margin: "0 0 7px",
              color: "#d0d0d0",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              margin: "0 0 22px",
              color: "#777",
              fontSize: "12px",
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
              borderRadius: "6px",
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
              marginTop: "11px",
              padding: "16px",
              border: "none",
              borderRadius: "6px",
              background: "#00e67a",
              color: "#020302",
              fontFamily: font,
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            ENTER GRABITUK
          </button>

          <p
            style={{
              margin: "20px 0 0",
              color: "#4f5551",
              fontSize: "8px",
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
        overflowX: "hidden",
        margin: 0,
        background: "#070807",
        color: "#f4f4f4",
        fontFamily: font,
      }}
    >
      {/* TOP BAR */}

      <header
        style={{
          width: "100%",
          padding: "17px 18px",
          boxSizing: "border-box",
          borderBottom: "1px solid #191d1a",
          background: "#060806",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              GRABITUK
            </div>

            <div
              style={{
                color: "#00e67a",
                fontSize: "7px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                marginTop: "2px",
              }}
            >
              TECH. PRIVACY. MODS.
            </div>
          </div>

          <div
            style={{
              color: "#00e67a",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "2px",
              border: "1px solid #183d2a",
              padding: "7px 9px",
            }}
          >
            ONLINE
          </div>
        </div>
      </header>

      {/* HERO */}

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "65px 18px 48px",
          boxSizing: "border-box",
          background:
            "radial-gradient(circle at 50% 20%, #102017 0%, #090b09 42%, #070807 75%)",
        }}
      >
        <p
          style={{
            color: "#00e67a",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "4px",
            margin: "0 0 19px",
          }}
        >
          WELCOME TO GRABITUK
        </p>

        <h1
          style={{
            width: "100%",
            maxWidth: "850px",
            margin: 0,
            color: "#fff",
            fontSize: "clamp(39px, 11vw, 76px)",
            lineHeight: 0.97,
            fontWeight: 850,
            letterSpacing: "-2px",
          }}
        >
          TECH.
          <br />
          PRIVACY.
          <br />
          MODS.
        </h1>

        <p
          style={{
            margin: "18px 0 7px",
            color: "#00e67a",
            fontSize: "clamp(20px, 6vw, 28px)",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            margin: "0 0 31px",
            color: "#858985",
            fontSize: "13px",
          }}
        >
          The fun side of tech.
        </p>

        {/* JOIN LIST */}

        <div
          style={{
            width: "100%",
            maxWidth: "620px",
            padding: "22px 16px",
            boxSizing: "border-box",
            background: "rgba(9,12,10,0.9)",
            border: "1px solid #24442f",
            borderRadius: "12px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              color: "#00e67a",
              fontSize: "8px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 8px",
            }}
          >
            GRABITUK MEMBERS
          </p>

          <h2
            style={{
              margin: "0 0 7px",
              fontSize: "clamp(20px, 6vw, 25px)",
              fontWeight: 750,
            }}
          >
            Get in on the next drop.
          </h2>

          <p
            style={{
              color: "#858985",
              fontSize: "12px",
              lineHeight: 1.55,
              margin: "0 auto 18px",
              maxWidth: "460px",
            }}
          >
            Exclusive product drops, subscriber discounts and GrabitUK
            news.
          </p>

          <form
            onSubmit={joinDrop}
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(190px, 1fr))",
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
                width: "100%",
                minWidth: 0,
                padding: "15px",
                boxSizing: "border-box",
                background: "#050605",
                border: "1px solid #303431",
                borderRadius: "6px",
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
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "6px",
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
              margin: "11px auto 0",
              maxWidth: "470px",
              color: "#555b57",
              fontSize: "8px",
              lineHeight: 1.5,
            }}
          >
            By joining, you agree to receive GrabitUK marketing emails,
            product news and offers. Unsubscribe at any time.
          </p>

          {message && (
            <p
              style={{
                margin: "13px 0 0",
                color:
                  message.includes("wrong") ||
                  message.includes("Please")
                    ? "#ddd"
                    : "#00e67a",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              {message}
            </p>
          )}
        </div>
      </section>

      {/* PRODUCTS */}

      <section
        style={{
          width: "100%",
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "25px 14px 70px",
          boxSizing: "border-box",
        }}
      >
        {/* PRIVACY PHONES */}

        <div
          style={{
            background:
              "linear-gradient(145deg, #0d100e, #090b0a)",
            border: "1px solid #222823",
            borderRadius: "14px",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              minHeight: "235px",
              padding: "30px 20px",
              boxSizing: "border-box",
              background:
                "radial-gradient(circle at center, #17291e, #090b0a 68%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  margin: "0 auto 16px",
                  border: "1px solid #29533b",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00e67a",
                  fontSize: "37px",
                  fontWeight: 800,
                  boxShadow: "0 0 35px rgba(0,230,122,0.08)",
                }}
              >
                G
              </div>

              <div
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                GRAPHENEOS
              </div>

              <div
                style={{
                  color: "#667068",
                  fontSize: "8px",
                  letterSpacing: "1.5px",
                  marginTop: "6px",
                }}
              >
                PRIVACY-FOCUSED ANDROID OS
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "27px 20px 30px",
            }}
          >
            <p
              style={{
                color: "#00e67a",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "3px",
                margin: "0 0 9px",
              }}
            >
              PRIVACY PHONES
            </p>

            <h2
              style={{
                margin: "0 0 13px",
                fontSize: "clamp(27px, 8vw, 38px)",
                lineHeight: 1.05,
                fontWeight: 800,
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
                fontSize: "13px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Selected Google Pixel devices configured with GrapheneOS,
              a privacy and security focused Android operating system.
            </p>

            <div
              style={{
                marginTop: "19px",
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
              }}
            >
              {["GrapheneOS", "Google Pixel", "Privacy", "Security"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      padding: "7px 9px",
                      border: "1px solid #29302b",
                      borderRadius: "20px",
                      background: "#090b0a",
                      color: "#a1a6a2",
                      fontSize: "9px",
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <p
              style={{
                color: "#4d534e",
                fontSize: "8px",
                lineHeight: 1.5,
                margin: "18px 0 0",
              }}
            >
              GrabitUK is an independent seller and is not affiliated
              with or endorsed by GrapheneOS or Google.
            </p>
          </div>
        </div>

        {/* MODDED NINTENDO DEVICES */}

        <div
          style={{
            background:
              "linear-gradient(145deg, #0d100e, #090b0a)",
            border: "1px solid #222823",
            borderRadius: "14px",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {/* YOUR ACTUAL GRABITUK LOGO */}

          <div
            style={{
              minHeight: "260px",
              padding: "20px",
              boxSizing: "border-box",
              background:
                "radial-gradient(circle at center, #18231d, #080a09 70%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/IMG_5923.PNG"
              alt="GrabitUK custom gaming and modded devices"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "390px",
                height: "auto",
                borderRadius: "10px",
                objectFit: "contain",
                boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
              }}
            />
          </div>

          <div
            style={{
              padding: "27px 20px 30px",
            }}
          >
            <p
              style={{
                color: "#00e67a",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "3px",
                margin: "0 0 9px",
              }}
            >
              MODDED DEVICES
            </p>

            <h2
              style={{
                margin: "0 0 13px",
                fontSize: "clamp(27px, 8vw, 38px)",
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              Nintendo DS Family.
            </h2>

            <p
              style={{
                color: "#929793",
                fontSize: "13px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Custom Nintendo DS, 2DS and 3DS family devices with
              personalised themes, homebrew setups and customisation.
            </p>

            <div
              style={{
                marginTop: "19px",
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
              }}
            >
              {["Nintendo DS", "2DS", "3DS", "Homebrew"].map(
                (item) => (
                  <span
                    key={item}
                    style={{
                      padding: "7px 9px",
                      border: "1px solid #29302b",
                      borderRadius: "20px",
                      background: "#090b0a",
                      color: "#a1a6a2",
                      fontSize: "9px",
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <p
              style={{
                color: "#4d534e",
                fontSize: "8px",
                lineHeight: 1.5,
                margin: "18px 0 0",
              }}
            >
              Nintendo product names are used only to identify
              compatible devices. GrabitUK is not affiliated with or
              endorsed by Nintendo.
            </p>
          </div>
        </div>

        {/* CUSTOM TECH */}

        <div
          style={{
            background:
              "linear-gradient(145deg, #0d100e, #090b0a)",
            border: "1px solid #222823",
            borderRadius: "14px",
            padding: "30px 20px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              border: "1px solid #23442f",
              borderRadius: "13px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#09120d",
              color: "#00e67a",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            ⚡
          </div>

          <p
            style={{
              color: "#00e67a",
              fontSize: "8px",
              fontWeight: 700,
              letterSpacing: "3px",
              margin: "0 0 9px",
            }}
          >
            CUSTOM TECH
          </p>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            Accessories & More.
          </h2>

          <p
            style={{
              color: "#929793",
              margin: 0,
              lineHeight: 1.65,
              fontSize: "13px",
            }}
          >
            Custom setups, accessories and personalised technology for
            people looking for something different.
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <footer
        style={{
          padding: "55px 18px 32px",
          textAlign: "center",
          background: "#050605",
          borderTop: "1px solid #1c1f1d",
        }}
      >
        <p
          style={{
            color: "#00e67a",
            fontSize: "8px",
            fontWeight: 700,
            letterSpacing: "3px",
            margin: "0 0 10px",
          }}
        >
          GET IN TOUCH
        </p>

        <h2
          style={{
            margin: "0 0 24px",
            fontSize: "26px",
            fontWeight: 800,
          }}
        >
          Contact GrabitUK
        </h2>

        <a
          href="mailto:Grabituk@proton.me"
          style={{
            width: "100%",
            maxWidth: "390px",
            margin: "0 auto",
            padding: "16px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "11px",
            background: "#0b0e0c",
            border: "1px solid #29302b",
            borderRadius: "10px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              color: "#00e67a",
              fontSize: "21px",
            }}
          >
            ✉
          </span>

          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Email: Grabituk@proton.me
          </span>
        </a>

        <div
          style={{
            maxWidth: "800px",
            margin: "40px auto 0",
            paddingTop: "25px",
            borderTop: "1px solid #171917",
          }}
        >
          <div
            style={{
              color: "#d9dcda",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            GRABITUK
          </div>

          <div
            style={{
              color: "#454945",
              fontSize: "8px",
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
