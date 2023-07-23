import React, { useState } from "react";

const TheLegalContent = () => {
  return (
    <p>
      {/*...*/}
    </p>
  );
};

const UserConsent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        I accept the terms and conditions
      </label>

      <div style={{margin: '0.5rem 0'}}>
        <button disabled={!isChecked}>Next</button>
      </div>
    </>
  );
};

const TermsAndConditions = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <TheLegalContent />
      <UserConsent />
    </div>
  );
};

export { TermsAndConditions };
