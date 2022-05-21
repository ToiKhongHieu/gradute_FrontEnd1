import { useEffect, useState } from "react";
import { getsaleatshop, getSumOrders, getTopFoods, getTotal, getTotalSalesDay, getTotalSalesMonth, getTotalSalesYear, getTotalShip } from "../../../api/oderAPI";

export default function Dashboard(props) {
    const [totalSales, setTotalSales] = useState(0);
    const [sumOrders, setSumOrders] = useState(0);
    const [totalSalesDay, setTotalSalesDay] = useState(0);
    const [totalSalesMonth, setTotalSalesMonth] = useState(0);
    const [totalSalesYear, setTotalSalesYear] = useState(0);
    const [totalSalesAtShop, setTotalSaleAtShop] = useState(0);
    const [topFoods, setTopFoods] = useState([]);
    const [totalSaleShip, setTotalSaleShip] = useState(0);
    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotal();
                await setTotalSales(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotalSalesDay();
                await setTotalSalesDay(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotalSalesMonth();
                await setTotalSalesMonth(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotalSalesYear();
                await setTotalSalesYear(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);


    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotal();
                await setTotalSales(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTopFoods();
                await setTopFoods(data);
                console.log("TopFoods", topFoods);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getSumOrders();
                await setSumOrders(data);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getsaleatshop();
                await setTotalSaleAtShop(data);
                // const {data2} = await getTotalByStatus("Đã nhận được hàng");
                // await setTotalSaleShip(data2);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    useEffect(() => {
        const getDashboard = async () => {
            try {
                const { data } = await getTotalShip();
                await setTotalSaleShip(data);
                // const {data2} = await getTotalByStatus("Đã nhận được hàng");
                // await setTotalSaleShip(data2);
            } catch (error) {
                console.log("Error getCategories " + error);
            }
        }
        getDashboard();
    }, []);

    return (
        <>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-info-light">
                                                <svg class="svg-icon" id="p-dash4" width="20" height="20"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="mb-2">Tổng số lượng đơn hàng</p>
                                                <h4>{sumOrders}</h4>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-info iq-progress progress-1" data-percent="85">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-info-light">
                                                <img src="../assets/images/product/1.png" class="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Tổng doanh số</p>
                                                <h4>{totalSales.toLocaleString()}</h4><p>VNĐ</p>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-info iq-progress progress-1" data-percent="85">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-danger-light">
                                                <img src="../assets/images/product/2.png" class="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Doanh số bán tại bàn</p>
                                                <h4>{totalSalesAtShop.toLocaleString()}</h4><p>VNĐ</p>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-danger iq-progress progress-1" data-percent="70">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-success-light">
                                                <img src="../assets/images/product/3.png" class="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Doanh số bán mang về</p>
                                                <h4>{totalSaleShip.toLocaleString()}</h4><p>VNĐ</p>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-success iq-progress progress-1" data-percent="75">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card card-block card-stretch card-height">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title text-primary">Doanh thu theo tháng</h4>
                                    </div>
                                    <div class="card-header-toolbar d-flex align-items-center">
                                        <h4>{totalSalesDay.toLocaleString()}</h4><p>VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card card-block card-stretch card-height">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title text-primary">Doanh thu theo tháng</h4>
                                    </div>
                                    <div class="card-header-toolbar d-flex align-items-center">
                                        <h4>{totalSalesMonth.toLocaleString()}</h4><p>VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card card-block card-stretch card-height">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title text-primary">Doanh thu theo tháng</h4>
                                    </div>
                                    <div class="card-header-toolbar d-flex align-items-center">
                                        <h4>{totalSalesYear.toLocaleString()}</h4><p>VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title text-success">Top 5 món bán chạy nhất</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled row top-product mb-0">

                                        {
                                            topFoods.slice(0, 5).map((item) => {
                                                return (<li className="col-lg-3">
                                                    <div className="card card-block card-stretch card-height mb-0">
                                                        <div className="card-body">
                                                            <div className="bg-warning-light rounded">
                                                                <img src={`../images/${item.url}`}
                                                                    class="style-img img-fluid m-auto p-3" alt="image" />
                                                            </div>
                                                            <div className="style-text text-left mt-3">
                                                                <h5 className="mb-1">{item.name}</h5>
                                                                <p className="mb-0">{item.price.toLocaleString()} VNĐ</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>)
                                            })
                                        }



                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}