"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterBox className="footer-first-container">
      <ElementsBox className="footer-container">
        <SocialMediaBox className="social-media-container">
          <div className="social-link">
            <Link
              href="https://twitter.com"
              className="social twitter-link"
            >
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.43964 25.0945C20.7189 25.0945 26.8899 15.7475 26.8899 7.64428C26.8899 7.38151 26.884 7.1129 26.8724 6.85013C28.0728 5.98199 29.1088 4.90667 29.9316 3.67471C28.8136 4.17213 27.6265 4.49699 26.4111 4.6382C27.6909 3.87105 28.6492 2.66589 29.1082 1.24613C27.9042 1.95967 26.5875 2.46301 25.2146 2.73458C24.2895 1.75164 23.0664 1.10082 21.7343 0.882735C20.4023 0.664652 19.0355 0.891454 17.8453 1.52808C16.655 2.1647 15.7077 3.17568 15.1496 4.40472C14.5916 5.63375 14.454 7.01239 14.7581 8.32748C12.3202 8.20514 9.93516 7.57183 7.7577 6.46861C5.58023 5.36539 3.65891 3.81689 2.1183 1.92349C1.33527 3.27352 1.09567 4.87103 1.44817 6.39137C1.80068 7.91171 2.71885 9.24078 4.01608 10.1085C3.0422 10.0776 2.08965 9.81535 1.23714 9.34352V9.41943C1.23627 10.8362 1.72605 12.2095 2.62324 13.306C3.52042 14.4024 4.76963 15.1544 6.15852 15.4339C5.25638 15.6808 4.30954 15.7167 3.39127 15.539C3.78319 16.7575 4.54572 17.8231 5.57244 18.5873C6.59916 19.3515 7.83884 19.776 9.11848 19.8018C6.94604 21.5082 4.26244 22.4338 1.49991 22.4294C1.01 22.4287 0.52057 22.3987 0.0342407 22.3395C2.84067 24.14 6.10531 25.0963 9.43964 25.0945Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="social-link">
            <Link
              href="https://www.instagram.com"
              className="social instagram-link"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0171 2.69193C19.0112 2.69193 19.4842 2.70945 21.055 2.77952C22.5148 2.84375 23.3031 3.089 23.8286 3.29338C24.5235 3.56199 25.0257 3.88899 25.5454 4.40869C26.0709 4.93423 26.3921 5.43057 26.6607 6.12545C26.8651 6.65099 27.1103 7.44514 27.1746 8.89913C27.2446 10.4757 27.2622 10.9487 27.2622 14.937C27.2622 18.9311 27.2446 19.4041 27.1746 20.9749C27.1103 22.4347 26.8651 23.223 26.6607 23.7485C26.3921 24.4434 26.0651 24.9456 25.5454 25.4653C25.0199 25.9908 24.5235 26.312 23.8286 26.5806C23.3031 26.785 22.5089 27.0302 21.055 27.0945C19.4783 27.1645 19.0054 27.1821 15.0171 27.1821C11.023 27.1821 10.55 27.1645 8.97923 27.0945C7.5194 27.0302 6.73109 26.785 6.20555 26.5806C5.51067 26.312 5.00849 25.985 4.48879 25.4653C3.96325 24.9398 3.64209 24.4434 3.37348 23.7485C3.1691 23.223 2.92385 22.4288 2.85962 20.9749C2.78955 19.3982 2.77203 18.9253 2.77203 14.937C2.77203 10.9429 2.78955 10.4699 2.85962 8.89913C2.92385 7.4393 3.1691 6.65099 3.37348 6.12545C3.64209 5.43057 3.96909 4.92839 4.48879 4.40869C5.01433 3.88315 5.51067 3.56199 6.20555 3.29338C6.73109 3.089 7.52524 2.84375 8.97923 2.77952C10.55 2.70945 11.023 2.69193 15.0171 2.69193ZM15.0171 0C10.9588 0 10.4507 0.017518 8.8566 0.0875899C7.26831 0.157662 6.17635 0.414592 5.23038 0.782469C4.24354 1.16786 3.40851 1.67589 2.57933 2.51091C1.74431 3.34009 1.23629 4.17512 0.85089 5.15612C0.483012 6.10793 0.226082 7.19405 0.15601 8.78234C0.0859384 10.3823 0.0684204 10.8903 0.0684204 14.9487C0.0684204 19.007 0.0859384 19.515 0.15601 21.1092C0.226082 22.6975 0.483012 23.7894 0.85089 24.7354C1.23629 25.7222 1.74431 26.5572 2.57933 27.3864C3.40851 28.2156 4.24354 28.7295 5.22454 29.109C6.17635 29.4769 7.26247 29.7338 8.85076 29.8039C10.4449 29.874 10.9529 29.8915 15.0113 29.8915C19.0696 29.8915 19.5776 29.874 21.1717 29.8039C22.76 29.7338 23.852 29.4769 24.798 29.109C25.779 28.7295 26.614 28.2156 27.4432 27.3864C28.2724 26.5572 28.7862 25.7222 29.1658 24.7412C29.5337 23.7894 29.7906 22.7033 29.8607 21.115C29.9307 19.5209 29.9482 19.0128 29.9482 14.9545C29.9482 10.8962 29.9307 10.3882 29.8607 8.79402C29.7906 7.20573 29.5337 6.11377 29.1658 5.1678C28.7979 4.17512 28.2899 3.34009 27.4549 2.51091C26.6257 1.68173 25.7906 1.16787 24.8096 0.788309C23.8578 0.420431 22.7717 0.163501 21.1834 0.0934292C19.5834 0.017518 19.0754 0 15.0171 0Z"
                  fill="white"
                />
                <path
                  d="M15.0171 7.26996C10.7777 7.26996 7.33838 10.7093 7.33838 14.9487C7.33838 19.188 10.7777 22.6274 15.0171 22.6274C19.2564 22.6274 22.6958 19.188 22.6958 14.9487C22.6958 10.7093 19.2564 7.26996 15.0171 7.26996ZM15.0171 19.9296C12.2668 19.9296 10.0361 17.699 10.0361 14.9487C10.0361 12.1983 12.2668 9.96773 15.0171 9.96773C17.7674 9.96773 19.998 12.1983 19.998 14.9487C19.998 17.699 17.7674 19.9296 15.0171 19.9296Z"
                  fill="white"
                />
                <path
                  d="M24.7921 6.96629C24.7921 7.95898 23.9862 8.75896 22.9994 8.75896C22.0067 8.75896 21.2067 7.95314 21.2067 6.96629C21.2067 5.9736 22.0126 5.17361 22.9994 5.17361C23.9862 5.17361 24.7921 5.97944 24.7921 6.96629Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>

          <div className="social-link">
            <Link
              href="https://www.facebook.com"
              className="social facebook-link"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8973 14.9487C29.8973 6.69274 23.2046 0 14.9487 0C6.69274 0 0 6.69274 0 14.9487C0 22.4099 5.46648 28.5943 12.6129 29.7157V19.2698H8.81738V14.9487H12.6129V11.6553C12.6129 7.90878 14.8447 5.83932 18.2593 5.83932C19.8943 5.83932 21.6055 6.13129 21.6055 6.13129V9.81007H19.7206C17.8637 9.81007 17.2844 10.9625 17.2844 12.1458V14.9487H21.4303L20.7676 19.2698H17.2844V29.7157C24.4309 28.5943 29.8973 22.4099 29.8973 14.9487Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </SocialMediaBox>
        <MailTo className="mail-to">
          <Link href="mailto:massi.marcello@icloud.com">
            massi.marcello@icloud.com
          </Link>
        </MailTo>
        <LogoBox>
          <Image
            src="/assets/decoration_logoe.png"
            alt="mass dev logo"
            width={40}
            height={40}
            className="massdev-logo "
          />
          <p className="massdev-text">MassDev 2024</p>
        </LogoBox>
      </ElementsBox>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #00286b;
  height: 8rem;
  color: #fff;
  font-family: "Quicksand", sans-serif;
  margin: 0;
  margin-top: auto;


`;
const ElementsBox = styled.div`

`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  .massdev-text {
    margin-left: 0.2rem;
  }
`;

const SocialMediaBox = styled.div`
  display: flex;

  position: absolute;
  right: 0;
  top: 0;

  .social-link {
    margin-right: 1.5rem;
    margin-top: 1rem;
  }
`;
const MailTo = styled.div`
  margin-top: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  a {
    color: #fff;
    &:hover {
      color: #feeb64;
    }
  }
`;
