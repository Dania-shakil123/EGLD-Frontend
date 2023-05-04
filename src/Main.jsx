import React, { useState ,useEffect} from "react";
import "./index.css";
import { ExtensionProvider } from "@multiversx/sdk-extension-provider";
import Modal from "react-modal";

function Main() {
  const [account, setAccount] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 999,
      background: "rgb(0 0 0 0)",
    },
  };

  const connect = async () => {
    const provider = ExtensionProvider.getInstance();
    await provider.init();

    const address = await provider.login();

    console.log(address);
    console.log(provider.account);
    setAccount(provider.account);

   
    localStorage.setItem("account", provider.account);
  };

  const disconnect = async () => {
    const provider = ExtensionProvider.getInstance();
    await provider.init();

    const address = await provider.logout();
    setAccount(null);
  };
  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);
  return (
    <>
      <div>
        <div
          className="flex flex-col grow justify-between"
          style={{
            "min-height": "625px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div
            className="scroll-to-top z-10 fixed ml-2"
            style={{ opacity: "0", "pointer-events": "none" }}
          >
            <button
              name="scrollTop"
              id="scrollTop"
              aria-label="scrollTop"
              className="rounded border-divider flex items-center justify-center duration-300 bg-alternate hover:border-primary-light hover:dark:border-primary-dark"
              style={{ width: "44px", height: "44px", "border-width": "2px" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
              </svg>
            </button>
          </div>
          <div
            className="fixed z-40 w-full bg-body"
            style={{
              "padding-top": "0px",
              "padding-bottom": "0px",
              "max-height": "60px",
            }}
          >
            <div
              className="padded | flex gap-2 items-center md:gap-4 flex-nowrap xl:!px-4"
              style={{ backgroundColor: "black" }}
            >
              <div
                className="flex items-center shrink-0"
                style={{ "min-height": "60px" }}
              >
                <a
                  className="link flex sm:hidden items-center navbar-brand mr-0 cursor-pointer"
                  href="/"
                >
                  <img
                    alt="Img"
                    src="img/xoxno_banner.webp"
                    width={30}
                    height={30}
                    style={{ color: "transparent" }}
                  />
                </a>
                <a
                  className="link hidden sm:flex items-center navbar-brand mr-0 cursor-pointer"
                  href="/"
                >
                  <img
                    alt="Img"
                    src="img/xoxno_banner.webp"
                    width={135}
                    height={25}
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="flex justify-center items-center grow">
                <div className="w-full">
                  <div
                    className="collection-search search relative"
                    style={{ "max-width": "650px", width: "100%" }}
                  >
                    <div className="flex items-center input-group md-form form-sm form-1 pl-0 relative">
                      <div className="w-full">
                        <div className="flex flex-col gap-1 text-sm">
                          <label
                            htmlFor="global-search"
                            className="block empty:hidden text-muted"
                          />
                          <div className="relative">
                            <div className="absolute inset-y-0 right-3 flex items-center text-muted">
                              <button
                                name="global-search-right"
                                id="global-search-right"
                                aria-label="global-search-right"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                </svg>
                              </button>
                            </div>
                            <input
                              autoComplete="off"
                              type="text"
                              name="global-search"
                              id="global-search"
                              className="bg-alternate border !border-divider-light dark:!border-divider-dark | block w-full rounded px-2 py-2 transition-shadow duration-300 focus:ring-2 outline-0 focus:!ring-primary-light dark:focus:ring-primary-dark dark:placeholder:text-body-light/60 placeholder:text-body-dark/70 disabled:opacity-50 disabled:cursor-not-allowed pr-9"
                              placeholder="Search..."
                              value="Search..."
                              aria-label="Search"
                              defaultValue
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 xl:hidden">
                <button
                  name="ProfileButton"
                  aria-label="ProfileButton"
                  id="ProfileButton"
                  className="show_popup w-9 h-9 border-divider bg-alternate overflow-hidden rounded flex justify-center items-center relative"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                  </svg>
                </button>
              </div>
              <div className="shrink-0 xl:hidden empty:hidden" />
              <div className="shrink-0 xl:hidden">
                <button className="color_mode relative w-9 h-9 shrink-0 border-divider rounded flex justify-center items-center bg-alternate">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                  </svg>
                </button>
              </div>
              <button
                name="NavbarToggler"
                aria-label="NavbarToggler"
                id="NavbarToggler"
                className="navbar-toggler ml-[0.1rem] p-0 --collapsed xl:hidden"
              >
                <div className="navbar-toggler__icon">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </button>
              <div className="grow hidden xl:flex xl:items-center">
                <nav
                  aria-label="Main"
                  data-orientation="horizontal"
                  dir="ltr"
                  className="relative z-10 flex grow items-center justify-center"
                >
                  <div className="relative">
                    <div style={{ position: "relative" }}>
                      <ul
                        data-orientation="horizontal"
                        className="group flex flex-1 list-none items-center justify-center"
                        dir="ltr"
                      >
                        <li>
                          <button
                            id="radix:-trigger-radix:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix:-content-radix:"
                            className="nav-trigger group"
                            data-radix-collection-item
                          >
                            <a className href="/explore">
                              Explore
                            </a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="relative top-[1px] ml-2 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix:-trigger-radix:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix:-content-radix:"
                            className="nav-trigger group"
                            data-radix-collection-item
                          >
                            <a className href="/collections?tab=Minting">
                              Mint
                            </a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="relative top-[1px] ml-2 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix:-trigger-radix:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix:-content-radix:"
                            className="nav-trigger group"
                            data-radix-collection-item
                          >
                            <a className href="/airdrop">
                              Ecosystem
                            </a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="relative top-[1px] ml-2 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix:-trigger-radix:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix:-content-radix:"
                            className="nav-trigger group"
                            data-radix-collection-item
                          >
                            <a className href="/analytics">
                              Analyze
                            </a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="relative top-[1px] ml-2 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix:-trigger-radix:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix:-content-radix:"
                            className="nav-trigger group"
                            data-radix-collection-item
                          >
                            <a className href="/creator">
                              Create
                            </a>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="relative top-[1px] ml-2 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="absolute left-0 top-full flex justify-center" />
                  </div>
                </nav>
              </div>
              <div className="w-auto  xl:flex gap-2 items-center">
                <div className="button ">
                  <div className="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                    {account === null ? (
                      <button
                        className="show_popup tw whitespace-nowrap w-full px-5 py-1.5 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        <div className="stack-h whitespace-nowrap">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="https://www.w3.org/2000/svg"
                          >
                            <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                          </svg>
                          Connect Wallet
                        </div>
                      </button>
                    ) : (
                      <button
                        className="show_popup tw whitespace-nowrap w-full px-5 py-1.5 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                        type="button"
                        onClick={disconnect}
                      >
                        <div className="stack-h whitespace-nowrap">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="https://www.w3.org/2000/svg"
                          >
                            <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                          </svg>
                          Disconnect
                        </div>
                      </button>
                    )}
                  </div>
                </div>
                <button className="color_mode relative w-9 h-9 shrink-0 border-divider rounded flex justify-center items-center bg-alternate">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <svg width={0} height={0}>
            <linearGradient
              id="svg-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" />
              <stop offset="100%" />
            </linearGradient>
          </svg>
          <main
            className="pt-[theme(height.nav)] flex flex-col grow"
            style={{ "min-height": "625px" }}
          >
            <div className="flex grow">
              <div className="right-child w-full">
                <div className="mb-2" style={{ "padding-left": "15px" }}>
                  <div className="active-nfts-bar">
                    <div className="flex flex-wrap">
                      <button
                        className="nft-tab-item shrink-0 border-divider no-nft single-nft-tab"
                        style={{
                          cursor: "pointer",
                          "margin-bottom": "1px",
                          "margin-top": "1px",
                        }}
                      >
                        <div
                          className="flex gap-3 items-center justify-center relative"
                          style={{ "min-width": "120px", padding: "8px" }}
                        >
                          <span style={{ "line-height": "20px" }}>
                            Back to GenesisSpaceApes
                          </span>
                        </div>
                      </button>
                      <button
                        className="nft-tab-item shrink-0 border-divider GSPACEAPE-08bc2b-3210 single-nft-tab --active"
                        style={{
                          cursor: "pointer",
                          "margin-bottom": "1px",
                          "margin-top": "1px",
                        }}
                      >
                        <div
                          className="flex gap-3 items-center justify-center relative"
                          style={{ "min-width": "120px", padding: "8px" }}
                        >
                          <span style={{ "line-height": "20px" }}>#13819</span>
                          <div
                            className="absolute"
                            style={{
                              width: "13px",
                              top: "50%",
                              "-webkit-transform": "translateY(-50%)",
                              "-ms-transform": "translateY(-50%)",
                              transform: "translateY(-50%)",
                              right: "15px",
                            }}
                          >
                            <img
                              alt="Img"
                              src="img/close.svg"
                              width={13}
                              height={13}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="nft-list pb-[15px]">
                  <div className="grid md:grid-cols-2 md:gap-4 sm:grid-rows-1 px-2">
                    <div className="flex py-2 md:pt-10 mb-5 justify-center relative w-full md:h-screen md:sticky md:top-14">
                      <a
                        className="link w-full max-w-[600px] aspect-square rounded"
                        target="_blank"
                        rel="noreferrer"
                        href="https://media.elrond.com/nfts/asset/bafybeicsa2ygmod3btvjtdvf6pofhp4vtjgfzgpmjhmgiryunrceccxmee/13819.png"
                      >
                        <div className="relative img-before">
                          <img
                            alt="img"
                            src="img/GSPACEAPE-08bc2b-3210.avif"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              color: "transparent",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center overflow-x-auto flex-nowrap w-full pt-4 md:pt-0">
                        <div
                          aria-label="About"
                          id="About"
                          className="text-center cursor-pointer grow"
                        >
                          <div className="whitespace-nowrap font-bold text-base sm:text-lg tracking-wide border-b-4 border-transparent border-outline-light dark:border-primary-light !opacity-100 text-sm px-2 opacity-60 border-t-0 border-x-0 pb-3 mb-3 hover:opacity-100">
                            About
                          </div>
                        </div>
                        <div
                          aria-label="Game Info"
                          id="Game Info"
                          className="text-center cursor-pointer grow"
                        >
                          <div className="whitespace-nowrap font-bold text-base sm:text-lg tracking-wide border-b-4 border-transparent text-sm px-2 opacity-60 border-t-0 border-x-0 pb-3 mb-3 hover:opacity-100">
                            Game Info
                          </div>
                        </div>
                        <div
                          aria-label="Offers"
                          id="Offers"
                          className="text-center cursor-pointer grow"
                        >
                          <div className="whitespace-nowrap font-bold text-base sm:text-lg tracking-wide border-b-4 border-transparent text-sm px-2 opacity-60 border-t-0 border-x-0 pb-3 mb-3 hover:opacity-100">
                            Offers
                          </div>
                        </div>
                        <div
                          aria-label="Activity"
                          id="Activity"
                          className="text-center cursor-pointer grow"
                        >
                          <div className="whitespace-nowrap font-bold text-base sm:text-lg tracking-wide border-b-4 border-transparent text-sm px-2 opacity-60 border-t-0 border-x-0 pb-3 mb-3 hover:opacity-100">
                            Activity
                          </div>
                        </div>
                      </div>
                      <div className="md:px-6 px-2">
                        <div className="md:block">
                          <div className="pt-4 pb-3">
                            <h1 className="overflow-fix text-4xl font-bold !text-3xl lg:!text-4xl xl:!text-5xl">
                              GenesisSpaceApe #12421
                            </h1>
                          </div>
                          <div
                            className="flex md:flex-row flex-col items-start w-full"
                            style={{ gap: "19px" }}
                          >
                            <div className="flex gap-2 w-full justify-between items-start">
                              <div
                                className="price-wrapper footer-details-container px-5 shrink-0"
                                style={{
                                  color: "white",
                                }}
                              >
                                <div className="flex flex-col justify-center items-start group">
                                  <div className="flex flex-row shrink-0">
                                    <div className="w-full flex gap-0 justify-center items-center">
                                      <img
                                        alt
                                        src="img/egld.svg"
                                        width={25}
                                        height={25}
                                        decoding="async"
                                        data-nimg={1}
                                        className="overflow-hidden rounded shrink-0"
                                        style={{ color: "transparent" }}
                                      />
                                      <span className="price-text">2.79</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center gap-4 items-center">
                                <div className="flex gap-2">
                                  <div
                                    className="flex cursor-pointer justify-center items-center relative rounded border-divider"
                                    style={{ width: "38px", height: "38px" }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    className="flex cursor-pointer justify-center items-center relative rounded border-divider"
                                    style={{ width: "38px", height: "38px" }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 448 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hide-login flex flex-col gap-1 items-center md:items-end w-full">
                              <div className="button">
                                <div className="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                                  {account === null && (
                                    <button
                                      className="show_popup tw whitespace-nowrap w-full px-5 py-1.5 clip | font-bold text-body-dark"
                                      type="button"
                                      style={{
                                        color: "black",
                                        backgroundColor: "rgb(174 251 79)",
                                        zIndex: 0,
                                      }}
                                      onClick={connect}
                                    >
                                      <div className="stack-h whitespace-nowrap">
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          strokeWidth={0}
                                          viewBox="0 0 512 512"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                                        </svg>
                                        Connect Wallet
                                      </div>
                                    </button>
                                  )}
                                </div>
                              </div>
                              {/* <small
                                className=" text-center"
                                style={{ color: "#f7f7f799" }}
                              >
                                to buy this NFT or to make an offer
                              </small> */}
                            </div>
                            {account === null ? (
                              <div
                                className="show-btn flex flex-row gap-1 items-center md:items-end w-full"
                                style={{ display: "none" }}
                              >
                                <div
  className="button"
  style={{ width: "135px" }}
>
  <div className="duration-300 relative transition-all active:colored-drop-shadow-none hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-accent-light/75">
    <button
      className="tw whitespace-nowrap w-full px-5 py-1.5 clip | !bg-transparent font-bold before:dark:bg-offer-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
      type="button"
      style={{
        backgroundColor: "blue",
        color: "white" // added this line to change the text color to white
      }}
    >
      <div
        className=""
      >
        Offer
      </div>
    </button>
  </div>
</div>

                                <div
                                  className="button"
                                  style={{ width: "135px" }}
                                >
                                  <div className="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                                    <button
                                      className="tw whitespace-nowrap w-full px-5 py-1.5 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                                      type="button"
                                    >
                                      <div className="stack-h whitespace-nowrap">
                                        Buy
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="show-btn flex flex-row gap-1 items-center md:items-end w-full">
                                <div
                                  className="button"
                                  style={{ width: "135px" }}
                                >
                                  <div className="duration-300  relative transition-all active:colored-drop-shadow-none 
                                  hover:colored-drop-shadow-xs
                                   md:hover:colored-drop-shadow-sm 
                                   hover:colored-drop-shadow-accent-light/75">
                                   <button
  className="whitespace-nowrap w-full px-5 py-1.5  | 
  font-bold before:dark:bg-offer-light 
  before:dark:from-primary-light before:dark:to-primary-light 
  before:bg-outline-light/50 before:from-outline-light/50 
  before:to-outline-light/50 text-body-dark "
  type="button"
  style={{ backgroundColor: "cyan" , borderBottomRightRadius: "10px",borderTopLeftRadius: "10px" }}
>
  <div className="stack-h whitespace-nowrap">
    Offer
  </div>
</button>

                                  </div>
                                </div>
                                <div
                                  className="button"
                                  style={{ width: "135px" }}
                                >
                                  <div className="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                                    <button
                                      className="tw whitespace-nowrap w-full px-5 py-1.5 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                                      type="button"
                                    >
                                      <div className="stack-h whitespace-nowrap">
                                        Buy
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="pt-2" style={{ color: "#f7f7f799" }}>
                          Space Apes are in-game playable and tradable character
                          NFTs inside the Cantina Royale Game. Each Space Ape
                          belongs to a certain rarity: Bronze, Silver, Gold,
                          Epic, Legendary. They come with 3 Base Stats:
                          Vitality, Defence, Agility, and 2 randomly assigned
                          Special Perks. Every Space Ape comes with a unique ID
                          which remains permanent within the game and on-chain.
                        </div>
                        <div className="mt-2">
                          <div
                            className="about-nft-info flex flex-col gap-4"
                            style={{ backgroundColor: "rgb(59 61 66)" }}
                          >
                            <div className="flex items-center justify-between flex-row">
                              <div className>Owner:</div>
                              <div className="-white -green">
                                <a
                                  className="link w-full text-truncate"
                                  color="rgb(174 251 79)"
                                  href="/profile/erd1qqqqqqqqqqqqqpgqx00c5udg9uql5sgk5vswfr8cp7kalqgcyawq9xpw26"
                                >
                                  erd1...pw26
                                </a>
                              </div>
                            </div>
                            <div className="flex items-center justify-between flex-row">
                              <div className>Rank:</div>
                              <div className="-white -green">12359</div>
                            </div>
                            <div className="flex items-center justify-between flex-row">
                              <div className>Token ID:</div>
                              <div className="-white">
                                GSPACEAPE-08bc2b-3210
                              </div>
                            </div>
                            <div className="flex items-center justify-between flex-row">
                              <div className>Royalties:</div>
                              <div className="-white -green">5%</div>
                            </div>
                            <div className="flex items-center justify-between flex-row">
                              <div className>Token Type:</div>
                              <div className="-white">NonFungibleESDT</div>
                            </div>
                            <div className="flex items-center justify-between flex-row">
                              <div className>Marketplace:</div>
                              <div className="-white">XOXNO</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col grow-0">
                          <div
                            className="flex flex-row justify-between pb-2"
                            style={{ "padding-top": "30px" }}
                          >
                            <div className>Attributes</div>
                            <div className>Rarity</div>
                          </div>
                          <div className="mb-2">
                            <button className="single-nft-attribute-special flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Body:
                                  <span className="font-bold text-premium-light dark:text-premium-dark">
                                    T Shirt Red
                                  </span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:
                                  <span className="font-bold text-premium-light dark:text-premium-dark">
                                    2.79
                                  </span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="flex items-center rounded px-2 py-1 text-body-dark bg-premium-light dark:bg-premium-dark">
                                  <p className="mb-0">327</p>
                                  <p className="mb-0">(2.32%)</p>
                                </div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  LegAccessories:
                                  <span className="font-bold">
                                    Company Bags Green
                                  </span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">482</p>
                                <p className="mb-0">(3.41%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Perk 2:
                                  <span className="font-bold">
                                    Elemental Weapons Proficiency
                                  </span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.99</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">549</p>
                                <p className="mb-0">(3.89%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Legs:
                                  <span className="font-bold">
                                    Tactical Pants Green
                                  </span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">712</p>
                                <p className="mb-0">(5.04%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Perk 1:
                                  <span className="font-bold">Brawler</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">728</p>
                                <p className="mb-0">(5.16%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Skin:<span className="font-bold">Cream</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.83</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">783</p>
                                <p className="mb-0">(5.55%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Mouth:
                                  <span className="font-bold">Dumbfounded</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">884</p>
                                <p className="mb-0">(6.26%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Eyes:<span className="font-bold">Angry</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">1440</p>
                                <p className="mb-0">(10.20%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Rarity Class:
                                  <span className="font-bold">Bronze</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">4937</p>
                                <p className="mb-0">(34.97%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Background:
                                  <span className="font-bold">Desert</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">4937</p>
                                <p className="mb-0">(34.97%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Headgear:
                                  <span className="font-bold">None</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">5280</p>
                                <p className="mb-0">(37.40%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Earrings:
                                  <span className="font-bold">None</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">6133</p>
                                <p className="mb-0">(43.45%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Species:
                                  <span className="font-bold">
                                    Genesis Space Ape
                                  </span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">14116</p>
                                <p className="mb-0">(100.00%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Head:
                                  <span className="font-bold">Default</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">14116</p>
                                <p className="mb-0">(100.00%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                            <button className="single-nft-attribute flex gap-2 items-center justify-between px-5 mb-2">
                              <div className="flex flex-col items-start gap-1 flex-1 overflow-auto">
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Face:<span className="font-bold">None</span>
                                </p>
                                <p
                                  className="flex gap-2 items-center"
                                  style={{ "white-space": "nowrap" }}
                                >
                                  Floor:<span className="font-bold">2.79</span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="mb-0">14116</p>
                                <p className="mb-0">(100.00%)</p>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 448 512"
                                  className="ml-3"
                                  height="1em"
                                  width="1em"
                                  xmlns="https://www.w3.org/2000/svg"
                                >
                                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* ----------------------------------------------- Popup ------------------------------------------------- */}

        <Modal
          isOpen={isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          // contentLabel="Example Modal"
        >
          <div class=" overflow-y-auto inset-0 top-4">
            <div class="flex min-h-full items-end justify-center sm:items-center">
              <div class="bg-alternate rounded-t-2xl border-divider w-full transform p-6 shadow-xl transition-all sm:rounded-2xl sm:m-4 pt-2 sm:max-w-md opacity-100 translate-y-0 sm:scale-100">
                <div class="flex flex-col gap-3 text-center sm:gap-4">
                  <h3
                    class="text-left text-2xl font-bold sticky top-0 bg-alternate z-10 py-4"
                    id="headlessui-dialog-title"
                    data-headlessui-state="open"
                  >
                    <div
                      class="flex justify-between self-center items-center gap-4"
                      style={{ color: "white" }}
                    >
                      Connect your wallet
                      <button
                        class="close_popup rounded flex gap-2 items-center justify-center shrink-0 bg-alternate border-divider bg-body"
                        style={{ width: 38, height: 38 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          class="text-lg"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                        </svg>
                      </button>
                    </div>
                  </h3>
                  <div class="flex flex-col gap-3">
                    <a href="chrome-extension://dngmlblcodfobpdpecaadgfbcggfjfnm">
                      Open Extension
                    </a>
                    <div class="button btn-show w-full">
                      <div class="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                        <button
                          class="tw whitespace-nowrap w-full text-xl px-6 py-2 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                          type="button"
                          onClick={connect}
                        >
                          <div class="stack-h whitespace-nowrap">
                            <img
                              alt=""
                              src="img//extension.PNG"
                              width="20"
                              decoding="async"
                              data-nimg="1"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <div class="mx-auto">Extension</div>

                            <div style={{ width: 20 }}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="button btn-show w-full">
                      <div class="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                        <button
                          class="tw whitespace-nowrap w-full text-xl px-6 py-2 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                          type="button"
                        >
                          <div class="stack-h whitespace-nowrap">
                            <img
                              alt=""
                              src="img//maiar.svg"
                              width="20"
                              decoding="async"
                              data-nimg="1"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <div class="mx-auto">xPortal</div>
                            <div style={{ width: 20 }}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="button btn-show w-full">
                      <div class="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                        <button
                          class="tw whitespace-nowrap w-full text-xl px-6 py-2 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                          type="button"
                        >
                          <div class="stack-h whitespace-nowrap">
                            <img
                              alt=""
                              src="img//web.svg"
                              width="20"
                              decoding="async"
                              data-nimg="1"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <div class="mx-auto">Web Wallet</div>
                            <div style={{ width: 20 }}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="button btn-show w-full">
                      <div class="duration-300 relative transition-all active:colored-drop-shadow-none w-full hover:colored-drop-shadow-xs md:hover:colored-drop-shadow-sm hover:colored-drop-shadow-primary-light/75">
                        <button
                          class="tw whitespace-nowrap w-full text-xl px-6 py-2 clip | !bg-transparent font-bold before:dark:bg-primary-light before:dark:from-primary-light before:dark:to-primary-light before:bg-outline-light/50 before:from-outline-light/50 before:to-outline-light/50 text-body-dark"
                          type="button"
                        >
                          <div class="stack-h whitespace-nowrap">
                            <img
                              alt=""
                              src="img//ledger.svg"
                              width="20"
                              decoding="async"
                              data-nimg="1"
                              loading="lazy"
                              style={{ color: "transparent" }}
                            />
                            <div class="mx-auto">Ledger</div>
                            <div style={{ width: 20 }}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <span
                      class="flex flex-col text-muted"
                      style={{ color: "white" }}
                    >
                      New to MultiversX?
                      <a class="link" target="_blank" rel="noreferrer" href="#">
                        Learn how to setup a wallet
                      </a>
                    </span>
                  </div>
                  <div class="flex gap-2 justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Main;
