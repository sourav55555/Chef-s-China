import React from 'react';
import ReactToPdf from 'react-to-pdf';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const Blogs = () => {

    const ref = React.createRef();
    
    return (
        // blog page 
        <div className='min-h-screen dark:bg-cyan-950 dark:text-white'>
            <div className='flex items-center gap-3 text-lg px-6 md:flex-row flex-col md:px-32 font-semibold py-16'>
                <h2>Save the documents Offline.</h2>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({toPdf}) => (
                    <button className='bg-[#C59D5F] px-6 py-3 flex items-center gap-2 text-lg text-white' onClick={toPdf}>Download pdf <ArrowDownTrayIcon className='w-5 h-5 text-white'/> </button>
                )}
                </ReactToPdf>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mt-6 md:px-32 px-8 pb-32' ref={ref}>
                <div className='border-2 rounded-lg p-6' >
                    <p className='text-xl font-semibold mb-3 pb-2 border-b-2'>What is the differences between uncontrolled and controlled components?</p>
                    <p>
                        1. Controlled components controlled and update by react state, Uncontrolled components maintain it's own internal state. <br/>
                        2. Controlled components update by it's parent component when user interact, Uncontrolled components update own internal state when user interact <br/>
                        3. Debug is easier in controlled component, Uncontrolled component is more difficult to debug.
                    </p>
                </div>

                <div className='border-2 rounded-lg p-6'>
                    <p className='text-xl font-semibold mb-3 pb-2 border-b-2'>How to validate React props using PropTypes?</p>
                    <p>PropTypes is used for type checking to component props. In react component props are passed and propTypes check the type of props by its type definitions. If an invalid value is passed for a prop then a warning is shown.<br/><br/>
                    First install propTypes. Then import it and define in your project. Now react can check your prop value.
                    </p>
                </div>

                <div className='border-2 rounded-lg p-6'>
                    <p className='text-xl font-semibold mb-3 pb-2 border-b-2'>What is the difference between nodejs and express js?</p>
                    <p>NodeJs is not a framework or a programming language, its an open source and cross-platform runtime environment. It's mainly used for build event driven apps and sever site. It's build on google v8/ engine. <br/>
                    ExpressJs is a framework of Nodejs. It's mainly used for web-apps of nodejs. It is created on Nodejs.
                    </p>
                </div>

                <div className='border-2 rounded-lg p-6'>
                    <p className='text-xl font-semibold mb-3 pb-2 border-b-2'>What is a custom hook, and why will you create a custom hook?</p>
                    <p>
                        Custom hook is a function which is reusable. You can use unique logic in this functionality. This function can use one or more react built-in hooks. <br/>
                        There are so many react hooks, but if there are some of your requirements which can't full-fill by those hooks. Then, with help all of its functionality, you can create your own custom hook, which can full fill your requirement.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;