"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => { 
    const setProviders = async () => {
      const response = await getProviders();
      // once we get response, we set the providers
      setProviders(response);
    }
    setProviders();
  }, []) 

  return (
    <nav className="flex-between w-full mb-16 pt-3"> 
      <Link href="/" className="flex gap-2 flex-center"> 
        <Image src="/assets/images/logo.svg" width={100} height={100} alt="logo" className="object-contain" />
        <p className="logo_text">ChatETH.io</p>
      </Link> 

      { /* Dekstop Navigation */ }
      <div className="sm:flex hidden">
         {isUserLoggedIn ? (
          // if the user is logged in, show this
          <div className="flex gap-3 md:gap-5"> 
            <Link href="/create-prompt" className="black_btn">
              Chat with ChatGPT
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image src="/assets/images/profile.svg" width={37} height={37} alt="profile" className="object-contain" />
            </Link>
          </div>
         ): (
          <>
            { /* if the user is not logged in, show button of sign in! In this case Google Auth is used!*/ } 
            {providers && 
              Object.values(providers).map((provider) => ( 
              <button type="button" key="provider.name" onClick={() => signIn(provider.id)} className="black_btn"> 
                Sign In
              </button> ))
            }
          </>
         )}
      </div>

      {/* Mobile Navigation */ }
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? ( 
          <div className="flex"> 
            <Image 
              src="/assets/images/profile.svg" 
              width={37} 
              height={37} 
              alt="profile" 
              className="rounded-full" 
              onClick={() => setToggleDropdown((prev) => !prev)} 
            /> 
            {/* if toggle drop down is true, show the dropdown menu */}
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown
                    (false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown
                      (false)}
                  >
                  Create Prompt
                  </Link>
                  <button
                  type="button"
                  onClick = {() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black"
                  >
                  Sign Out
                  </button>
              </div>
            )}

          </div> 
          ) : ( 
          <>
            { /* if the user is not logged in, show button of sign in! In this case Google Auth is used!*/ } 
            {providers && 
              Object.values(providers).map((provider) => ( 
              <button type="button" key="provider.name" onClick={() => signIn(provider.id)} className="black_btn"> 
                Sign In
              </button> ))
            }
          </>
        )}
      </div>
        
    </nav>
  )
}

export default Nav