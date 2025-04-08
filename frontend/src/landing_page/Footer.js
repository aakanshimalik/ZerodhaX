import React from "react";

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250" }}>
            <div className="container border-top mt-5" >
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.svg" style={{ width: "50%" }} />
                        <p>
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <p>Company</p>
                        <a href="" style={{ textDecoration: "none", color: "black" }} className="d-block mb-0">About</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Products</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Pricing</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Referral programme</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Careers</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Zerodha cares (CSR)</a>
                        <br></br>
                    </div>
                    <div className="col">
                        <p>Support</p>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Contact</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Support portal</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Z-Connect blog</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>List of charges</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Downloads & resources</a>
                        <br></br>
                    </div>
                    <div className="col">
                        <p>Account</p>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Open an Account</a>
                        <br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>Fund transfer</a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}>60 day challenge</a>
                        <br></br>

                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className="d-inline text-primary" style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, for DP related to <a className="d-inline text-primary" style={{ textDecoration: "none" }}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on <a className="d-inline text-primary" style={{ textDecoration: "none" }}>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>
                        <a className="d-inline text-primary" style={{ textDecoration: "none" }}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>


                    <p className="mb-5">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
                <div className="text-secondary mb-5" style={{textAlign:"center"}} >

                    <a href=""> NSE</a>
                    <a href="">BSE</a>
                    <a href="">MCX</a>
                    <a href="">Terms & conditions</a>
                    <a href="">Policies & procedures</a>
                    <a href="">Privacy policy</a>
                    <a href="">Disclosure</a>
                    <a href="">For investor's</a>
                    <a href="">attention</a>
                    <a href="">Investor charter</a>
                </div >
            </div>
        </footer>
    );
}

export default Footer;