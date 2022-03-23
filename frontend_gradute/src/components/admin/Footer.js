export default function Footer(props){
    return (
        <>
            <footer className="iq-footer">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-inline mb-0">
                                        <li class="list-inline-item"><a href="../backend/privacy-policy.html">Privacy Policy</a>
                                        </li>
                                        <li class="list-inline-item"><a href="../backend/terms-of-service.html">Terms of Use</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 text-right">
                                    <span className="mr-1">
                                        <script>document.write(new Date().getFullYear())</script>©
                                    </span> <a href="#" className="">POS Dash</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}