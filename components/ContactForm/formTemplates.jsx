
const FormTemplates = ({formType}) => {
    switch (formType){
        case "communication":
            return(
            <>
                <input type="hidden" name="subject" value="[Form Submission] Communication"/>
                <h2 className="block text-gray-700 text-md font-bold">Communication or inquiry</h2>
                <p className=""><em>* indicates a required field</em></p>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name*</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="name" type="text" name="name" placeholder="Name" required aria-required="true"/>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email*</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="email" type="email" name="email" placeholder="info@queereugene.org" required aria-required="true"/>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="phone" type="text" name="phone" placeholder="541-555-1050" />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Organization</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="text" type="text" name="organization" placeholder="Queer Eugene" />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message*</label>
                    <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" name="message" required />
                <button className="qe-bg-teal shadow font-bold py-2 px-4 rounded w-full" type="submit">
                    Send message!
                </button>
            </>
            );

        case "add-resource":
            return(
                <>
                    <input type="hidden" name="subject" value="[Form Submission] Add a resource"/>
                    <h2 className="block text-gray-700 text-md font-bold mb-2">Add a resource to our website</h2>
                    <p><em>* indicates a required field</em></p>
                    <fieldset className="mb-3">
                        <legend className="block text-gray-700 text-sm font-bold mb-2">Type or focus of resource</legend>                        
                        <label><input type="radio" name="type"></input>Organization/Buisness</label><br/>
                        <label><input type="radio" name="type"></input>Healthcare</label><br/>
                        <label><input type="radio" name="type"></input>Intersectionality</label><br/>
                        <label><input type="radio" name="type"></input>Other</label><br/>
                    </fieldset>
                 
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name of resource</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="name" type="text" name="name" placeholder="Name"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlfor="url"> Website * </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="url" id="url" name="url" placeholder="https://hivalliance.org" required aria-required="true"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlfor="location">Locale</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="text" id="location" name="location" placeholder="Eugene"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlfor="location">Area of service</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="text" id="service-area" name="service-area" placeholder="Oregon"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Notes</label>
                        <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" name="message" required />
                    <button className="qe-bg-teal shadow font-bold py-2 px-4 rounded w-full" type="submit">
                        Send message!
                    </button>
                </>
                );

        case "remove-resource":
            return(
                <>
                    <input type="hidden" name="subject" value="[Form Submission] Request for resource removal"/>
                    <h2 className="block text-gray-700 text-md font-bold mb-2">Request to remove a resource from our website</h2>
                    <p className="mb-3"><em>* indicates a required field</em></p>                            
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name of resource*</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="name" type="text" name="resource"  placeholder="Name" required aria-required="true"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlfor="url"> Website</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="url" id="url" name="url" placeholder="queereugene.org"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email to contact you*</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="email" type="email" name="email"  placeholder="email@example.com" required aria-required="true"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Reason for removal*</label>
                        <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" name="reason" required aria-required="true" />
                    <button className="qe-bg-teal shadow font-bold py-2 px-4 rounded w-full" type="submit">
                        Send message!
                    </button>
                </>
                );

        case "add-event":
                return(
                    <>
                        <input type="hidden" name="subject" value="[Form Submission] Add Community Event"/>
                        <h2 className="block text-gray-700 text-md font-bold mb-2">Add an event to our community calendar</h2>
                        <p className="mb-3"><em>* indicates a required field</em></p>                            
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">Event Name*</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="eventName" type="text" name="event_name"  placeholder="Pride in the Park" required aria-required="true"/>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="host">Event Host*</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="host" type="text" name="event_host"  placeholder="Eugene Pride" required aria-required="true"/>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="host">Date*</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="date" id="date" name="date" required aria-required="true"/>
                        <div className="flex">
                            <div className="flex-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">Start Time *</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="time" id="startTime" name="start_time"  required aria-required="true"/>
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime">End Time</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" type="time" id="endTime" name="end_time"  />
                            </div>
                        </div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occurence">Occurence*</label>
                            <select  className="w-full mb-5 text-black rounded" id="occurence" name="occurence"  required aria-required="true">
                                <option value="once" selected>Once</option>
                                <option value="weekly">Weekly</option>
                                <option value="biweekly">Bi-Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="bimonthly">Bi-Monthly</option>
                                <option value="annually">Annually</option>
                                <option value="annually">Other</option>
                            </select>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">Notes</label>
                            <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="notes" maxlength="500" name="notes" placeholder="Looking forward to Pride!"/>
                        <button className="qe-bg-teal shadow font-bold py-2 px-4 rounded w-full" type="submit">
                            Send message!
                        </button>
                    </>
                    );
                
        default:
            return(
                <>
                    <h2 className="text-black mb-3">Communication or inquiry</h2>
                    <p className=""><em>* indicates a required field</em></p>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name*</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="name" type="text" placeholder="Name" name="name"  required aria-required="true"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email*</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="email" type="email" name="email"  placeholder="info@queereugene.org" required aria-required="true"/>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="phone" type="text" name="phone" placeholder="541-555-1050" />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Organization</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3" id="text" type="text" name="organization"  placeholder="Queer Eugene" />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message*</label>
                        <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" name="message" required />
                    <button className="qe-bg-teal shadow font-bold py-2 px-4 rounded w-full" type="submit">
                        Send message!
                    </button>
                </>
                );
    } 
};

export default FormTemplates;