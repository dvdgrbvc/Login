import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Flag from "../../assets/flag.png";

const country = [
  {
    id: 1,
    name: "English",
    avatar:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Deutsch",
    avatar: Flag,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selected, setSelected] = useState(country[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full cursor-pointer pr-6 text-left focus:outline-none text-xs">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="flex-shrink-0 h-4 w-4 rounded-full"
                />
                <span className="ml-2 block text-xs truncate">
                  {selected.name}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="black" />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 w-32 bg-white max-h-56 py-1 text-xs overflow-auto focus:outline-none">
                {country.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-primary" : "text-gray-900",
                        "cursor-pointer select-none relative py-1.5 px-2"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="flex-shrink-0 h-4 w-4 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-medium" : "font-normal",
                              "ml-2 block truncate w-full"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
