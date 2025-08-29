import React from 'react'

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b1a4f13-2d24-4e99-99ae-9417dcbc78da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='h-[70vh] w-[100%] flex justify-center items-center flex-col'>
      <form onSubmit={onSubmit}>
        <div className='w-full'>
        <input className='w-[100%] border-2 border-neutral-600' type="text" name="name" required/>
        </div>
        <div>
        <input type="email" name="email" required/>
        </div>
        <div>
        <textarea name="message" required></textarea>
        </div>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}
export default Contact
