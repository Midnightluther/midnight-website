"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [openCard, setOpenCard] = useState<string | null>(null);

  const unlock = () => {
    setAccess(true);
  };

  if (!access) {
    return (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          background:
            "radial-gradient(circle at center, #101a14 0%, #050505 45%, #000 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
          padding: "20px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            margin: "0 auto",
            padding: "42px 24px",
            background: "rgba(5,10,8,0.96)",
            border: "2px solid white",
            boxShadow: "0 0 40px rgba(0,255,136,0.12)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#00ff88",
              fontSize: "11px",
              letterSpacing: "3px",
              margin: "0 0 18px",
            }}
          >
            ● SYSTEM READY
          </p>

          <h1
            style={{
              width: "100%",
              margin: "0 0 18px",
              fontSize: "clamp(34px, 9vw, 58px)",
              fontWeight: 800,
              letterSpacing: "1px",
              lineHeight: 1,
              color: "white",
              textAlign: "center",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
              boxSizing: "border-box",
            }}
          >
            GRABITUK
          </h1>

          <p
            style={{
              color: "#aaa",
              letterSpacing: "4px",
              fontSize: "13px",
              margin: "0 0 12px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "13px",
              margin: "0 0 20px",
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
              background: "#000",
              border: "1px solid #333",
              color: "#00ff88",
              textAlign: "center",
              fontSize: "16px",
              letterSpacing: "4px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={unlock}
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "16px",
              background: "#00ff88",
              color: "#000",
              border: "none",
              fontWeight: 900,
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            ENTER
          </button>

          <p
            style={{
              color: "#555",
              fontSize: "11px",
              letterSpacing: "2px",
              margin: "18px 0 0",
            }}
          >
            GRABITUK ACCESS
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
      }}
    >
      <section
        style={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          WELCOME TO GRABITUK
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 9vw, 80px)",
            margin: "0",
            fontWeight: 900,
            letterSpacing: "3px",
          }}
        >
          TECH. PRIVACY. MODS.
        </h1>

        <p
          style={{
            fontSize: "clamp(20px, 4vw, 30px)",
            color: "#00ff88",
            marginTop: "18px",
            fontWeight: 700,
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            maxWidth: "600px",
            color: "#999",
            lineHeight: 1.7,
            marginTop: "25px",
          }}
        >
          Technology without the boring. Privacy-focused phones, customised
          devices and unique tech setups built for people who want something
          different.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          WHAT WE DO
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginBottom: "40px",
          }}
        >
          Explore the different sides of GrabitUK.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            onClick={() =>
              setOpenCard(openCard === "phones" ? null : "phones")
            }
            style={{
              padding: "30px 20px",
              border: "1px solid #222",
              background: "#080808",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>🔐</div>

            <h3>Privacy Phones</h3>

            <p style={{ color: "#777" }}>
              Pixel phones with GrapheneOS privacy features and carefully
              configured settings.
            </p>

            {openCard === "phones" && (
              <p
                style={{
                  color: "#aaa",
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                Privacy-focused Pixel setups using GrapheneOS. Depending on
                the setup, this can include stronger app isolation, permission
                controls, separate user profiles and optional Google service
                configurations.
              </p>
            )}
          </div>

          <div
            onClick={() =>
              setOpenCard(openCard === "gaming" ? null : "gaming")
            }
            style={{
              padding: "30px 20px",
              border: "1px solid #222",
              background: "#080808",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>🎮</div>

            <h3>Modded Devices</h3>

            <p style={{ color: "#777" }}>
              Customised handhelds and gaming devices.
            </p>

            {openCard === "gaming" && (
              <p
                style={{
                  color: "#aaa",
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                Custom themes, menus, homebrew and useful system tools for
                compatible devices. Devices and software are supplied only
                where legally permitted and supported.
              </p>
            )}
          </div>

          <div
            onClick={() =>
              setOpenCard(openCard === "custom" ? null : "custom")
            }
            style={{
              padding: "30px 20px",
              border: "1px solid #222",
              background: "#080808",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>⚡</div>

            <h3>Custom Tech</h3>

            <p style={{ color: "#777" }}>
              Accessories, unusual tech and personalised setups.
            </p>

            {openCard === "custom" && (
              <p
                style={{
                  color: "#aaa",
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                Useful accessories, unusual technology and personalised
                setups designed around how you want to use your devices.
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px 70px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "25px",
          }}
        >
          TERMS & CONDITIONS
        </h2>

        <div
          style={{
            background: "#080808",
            border: "1px solid #222",
            padding: "30px",
            color: "#999",
            lineHeight: 1.7,
            fontSize: "14px",
          }}
        >
          <p>
            <strong style={{ color: "white" }}>1. About GrabitUK</strong>
          </p>

          <p>
            GrabitUK provides technology products, customised devices,
            accessories and related services. Product descriptions,
            specifications and availability will be provided before purchase.
          </p>

          <p>
            <strong style={{ color: "white" }}>2. Product descriptions</strong>
          </p>

          <p>
            We aim to describe products and services accurately. Customers
            should check the individual product description, condition,
            specifications and included items before purchasing.
          </p>

          <p>
            <strong style={{ color: "white" }}>3. Customer rights</strong>
          </p>

          <p>
            Nothing on this website is intended to remove or restrict rights
            that customers have under applicable UK consumer law. Where
            applicable, customers retain their statutory rights relating to
            product quality, description, fitness for purpose, refunds and
            cancellation.
          </p>

          <p>
            <strong style={{ color: "white" }}>4. Customised devices</strong>
          </p>

          <p>
            Customised devices may differ from standard manufacturer
            configurations. Any modifications, software changes or additional
            features will be explained in the relevant product description.
          </p>

          <p>
            <strong style={{ color: "white" }}>5. Privacy-focused phones</strong>
          </p>

          <p>
            GrapheneOS can provide additional privacy and security features on
            compatible devices. No device or software configuration should be
            described as completely secure, anonymous or immune from attack.
          </p>

          <p>
            <strong style={{ color: "white" }}>6. Software and modifications</strong>
          </p>

          <p>
            Customers are responsible for using devices and software
            lawfully. GrabitUK does not provide or promote pirated games,
            copyrighted material without permission, or unlawful software.
          </p>

          <p>
            <strong style={{ color: "white" }}>7. Payments and orders</strong>
          </p>

          <p>
            Orders are subject to availability and confirmation. The final
            price, delivery information and applicable terms will be shown
            before an order is completed.
          </p>

          <p>
            <strong style={{ color: "white" }}>8. Returns and refunds</strong>
          </p>

          <p>
            Where UK consumer cancellation or return rights apply, they will
            be honoured in accordance with applicable law. Specific exceptions
            may apply where permitted by law, including certain customised or
            personalised products.
          </p>

          <p>
            <strong style={{ color: "white" }}>9. Website information</strong>
          </p>

          <p>
            Website information is provided for general product and service
            information. Product-specific terms and conditions may apply to
            individual purchases.
          </p>

          <p
            style={{
              marginTop: "25px",
              paddingTop: "20px",
              borderTop: "1px solid #222",
              color: "#555",
              fontSize: "12px",
            }}
          >
            These terms are intended as general business wording and should be
            reviewed for your specific business before you begin trading.
          </p>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #151515",
          padding: "30px 20px",
          textAlign: "center",
          color: "#555",
          letterSpacing: "2px",
          fontSize: "12px",
        }}
      >
        GRABITUK
        <br />
        <span style={{ color: "#333" }}>TECH. PRIVACY. MODS.</span>
      </footer>
    </main>
  );
}
