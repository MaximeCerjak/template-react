const ButtonRadio = ({id, title}) => {
    return (
        <div key={id} className="flex items-center">
                <input
                  id={id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={id === 'email'}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={id} className="ml-3 block text-sm font-medium text-gray-700">
                  {title}
                </label>
              </div>
    )
}

export default ButtonRadio