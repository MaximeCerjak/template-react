import {Link} from 'react-router-dom';

const tabs = [
    { name: 'My Account', href: '/conmponentsLibrary', current: true },
    { name: 'Company', href: '/conmponentsLibrary', current: false },
    { name: 'Team Members', href: '/conmponentsLibrary', current: false },
    { name: 'Billing', href: '/conmponentsLibrary', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
 const TabBarWithUnderline = () => {
    return (
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
            {tabs.map((tab, tabIdx) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                  tabIdx === 0 ? 'rounded-l-lg' : '',
                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5'
                  )}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    )
  }
  
  export default TabBarWithUnderline