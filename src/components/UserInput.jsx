export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(e) => {
              onChangeInput("initialInvestment", e.target.value);
            }}
            value={userInput.initialInvestment}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(e) => {
              onChangeInput("annualInvestment", e.target.value);
            }}
            value={userInput.annualInvestment}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            onChange={(e) => {
              onChangeInput("expectedReturn", e.target.value);
            }}
            value={userInput.expectedReturn}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(e) => {
              onChangeInput("duration", e.target.value);
            }}
            value={userInput.duration}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
