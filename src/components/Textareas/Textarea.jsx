const Textarea = () => {
    return (
      <div className="w-96">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Add your comment
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
          />
        </div>
      </div>
    )
  }
  
  export default Textarea