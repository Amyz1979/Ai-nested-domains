export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <h1>AI Nested Domains Subscription</h1>
      <p>Fully automated. Set & forget.</p>

      <a href="https://buy.stripe.com/test_00w5kw5vj8zteXveUk3AY00" target="_blank">
        <button style={{ padding: "12px 24px", margin: "20px", fontSize: "16px" }}>
          Subscribe Now
        </button>
      </a>

      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdgisgz3zguS1afEkJTeSaxDeX-87VVM__Z8k6o48L_aXEYug/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ border: "1px solid #ccc", borderRadius: "10px", marginTop: "20px" }}
      >
        Loading…
      </iframe>
    </main>
  )
}
