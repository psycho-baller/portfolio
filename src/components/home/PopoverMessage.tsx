import { Dialog, Transition } from '@headlessui/react'
import ReactMarkdown from 'react-markdown'
import { Fragment, useState } from 'react'
import type { message } from '@utils/types'
import "@styles/popover.scss"

export default function MyModal({ message }: { message: message }) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Transition appear show={isOpen} as={Fragment} >
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="container-bg w-full max-w-md sm:max-w-lg transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md text-gray-500 hover:text-gray-600 focus:border-none focus:outline-none transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z" /></svg>

                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-indigo-900"
                >
                  {message.header}
                </Dialog.Title>
                <div className="mt-4">
                  {/* gradient text */}
                  <p className="text-lg text-indigo-900 whitespace-pre-wrap text-body">
                    {/* read message.body as html */}
                    <ReactMarkdown children={message.body} />
                  </p>
                </div>
                <div className="flex justify-evenly mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition"
                    onClick={closeModal}

                  >
                    <a href={message.actionButton1?.url || "https://mail.google.com/mail/u/0/?fs=1&to=rami.rami@ucalgary.ca&su=About...&body=Hey%Rami,%20....&tf=cm"}>{message.actionButton1?.text || "Email me"}</a>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500  focus-visible:ring-offset-2 transition"
                    onClick={closeModal}
                  >
                    <a href={message.actionButton2?.url || "https://www.linkedin.com/in/rami--maalouf/"}>{message.actionButton2?.text || "Let's connect"}</a>
                  </button>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div >
      </Dialog >
    </Transition >
  )
}
