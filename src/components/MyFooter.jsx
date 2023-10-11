import React from 'react';
import logo from "../assets/icon.png";
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
              <img src={logo} alt="logo" className='w-10 inline-block items-center' />
              <span className='text-[#263238]'></span>NEXTCENT
            </a>
            <div>
              <p className='mb-1'>Copyright © 2023 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  About us
                </Footer.Link>
                <Footer.Link href="#">
                  Blog
                </Footer.Link>
                <Footer.Link href="#">
                  Contact us
                </Footer.Link>
                <Footer.Link href="#">
                  Pricing
                </Footer.Link>
                <Footer.Link href="#">
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Help center
                </Footer.Link>
                <Footer.Link href="#">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="#">
                  Legal
                </Footer.Link>
                <Footer.Link href="#">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Flowbite™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
