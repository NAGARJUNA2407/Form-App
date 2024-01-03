import { useState } from "react";
import "./App.css";

function App() {
 
  const [formData,SetFormData]=useState({
    firstName:"",lastName:"",email:"",country:"India",streetAddress:"",City:"",
    state:"", postal:"",comments:false,candidates:false,offers:false,pushNotification:""
  })

  function changeHandler(event){
    const {name , type , check , value}=event.target;

    SetFormData((prev)=>{
      return {...prev,[name]:value}
    });
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Final data is ...")
    console.log(formData)
  }

  return (

		 

		 
		<main className="bg-violet-100    ">
			 
			<div className=" flex flex-col   items-center max-w-[60%] mx-auto border-2  bg-violet-200 border-orange-400 pt-5  ">
				<form onSubmit={submitHandler}>
					<label htmlFor="firstName">First Name : </label> <br />
					<input
						type="text"
						name="firstName"
						id="firstName"
						placeholder="John"
						value={formData.firstName}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="lastName">Last Name : </label> <br />
					<input
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Doe"
						value={formData.lastName}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="firstName">Email Address : </label> <br />
					<input
						type="text"
						name="email"
						id="email"
						placeholder="example@gmail.com"
						value={formData.email}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="country">Country</label> <br />
					<select
						name="country"
						id="country"
						value={formData.country}
						onChange={changeHandler}
						className="outline w-[300px]">
						<option value="India">India</option>
						<option value="United States">United States</option>
						<option value="Canada">Canada</option>
						<option value="Mexico">Mexico</option>
					</select>
					<br />
					<br />
					<label htmlFor="streetAddress">
						Street Address :{' '}
					</label>{' '}
					<br />
					<input
						type="text"
						name="streetAddress"
						id="streetAddress"
						placeholder="Address"
						value={formData.streetAddress}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="city">City : </label> <br />
					<input
						type="text"
						name="city"
						id="city"
						placeholder="city"
						value={formData.city}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="state">State : </label> <br />
					<input
						type="text"
						name="state"
						id="state"
						placeholder="State"
						value={formData.state}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<label htmlFor="postal"> Postal / Pincode : </label> <br />
					<input
						type="text"
						name="postal"
						id="postal"
						placeholder="Pincode"
						value={formData.postal}
						onChange={changeHandler}
						className="outline w-[300px]"
					/>
					<br />
					<br />
					<fieldset>
						<legend>By Email :</legend>

						<div className="flex">
							<input
								type="checkbox"
								name="comments"
								id="comments"
								onChange={changeHandler}
								checked={formData.comments}
							/>
							<div>
								<label htmlFor="comments">Comments</label>
								<p>
									Get notified when someone posts a comment on
									a posting.{' '}
								</p>
							</div>
						</div>

						<div className="flex">
							<input
								type="checkbox"
								name="candidates"
								id="candidates"
								onChange={changeHandler}
								checked={formData.candidates}
							/>
							<div>
								<label htmlFor="candidates">Candidates </label>
								<p>
									Get notified when a candidate applies for
									job.{' '}
								</p>
							</div>
						</div>

						<div className="flex">
							<input
								type="checkbox"
								name="offers"
								id="offers"
								onChange={changeHandler}
								checked={formData.offers}
							/>
							<div>
								<label htmlFor="offers">Offers</label>
								<p>
									Get notified when a candidate accept or
									reject offer.
								</p>
							</div>
						</div>
					</fieldset>
					<br />
					<fieldset>
						<legend>Push Notifications</legend>
						<p>These are delivered via SMS to your mobile phone </p>

						<input
							type="radio"
							name="pushNotification"
							id="pushEverything "
							value="Everything"
							onChange={changeHandler}
						/>
						<label htmlFor="pushEverything">Everything </label>
						<br />

						<input
							type="radio"
							name="pushNotification"
							id="pushEmail"
							value="Same as email"
							onChange={changeHandler}
						/>
						<label htmlFor="pushEmail">Same as Email</label>
						<br />

						<input
							type="radio"
							name="pushNotification"
							id="pushNothing"
							value="No Push Notification"
							onChange={changeHandler}
						/>
						<label htmlFor="pushNothing">
							No Push Notification
						</label>
					</fieldset>
					<br />
					<br />
				 
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ">
						Save
					</button>
        <p className="opacity-80">(Check in the Console for data) </p>
					<br />
					<br />
					<br />
				</form>
			</div>
			 
		</main>
	 
  );
}

export default App;
