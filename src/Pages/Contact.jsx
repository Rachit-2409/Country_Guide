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
      <form onSubmit={onSubmit} className='w-84'>
        <div className='w-[100%]'>
        <input className='w-[100%] border-2 border-neutral-600 mb-2 p-2 rounded-lg' type="text" name="name" placeholder='Name' required/>
        </div>
        <div>
        <input className='w-[100%] border-2 border-neutral-600 mb-2 p-2 rounded-lg' type="email" name="email"placeholder='Email' required/>
        </div>
        <div>
        <textarea className='w-[100%] border-2 border-neutral-600 mb-2 p-2 rounded-lg' name="message" placeholder='Message' rows={8}required></textarea>
        </div>

        <button type="submit" className='border-2 cursor-pointer border-neutral-800 bg-neutral-600 p-2 rounded-lg'>Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}
export default Contact
