import ButtonRadio from "../Buttons/ButtonRadio"

const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  
 const RadioGroup = () => {
    return (
      <div className="text-left">
        <label className="text-base font-medium text-gray-900">Notifications</label>
        <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {notificationMethods.map((notificationMethod) => (
              <ButtonRadio key={notificationMethod.id} id={notificationMethod.id} title={notificationMethod.title} />
            ))}
          </div>
        </fieldset>
      </div>
    )
  }

  export default RadioGroup
  