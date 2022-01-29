const Profile = (props) => { 
        return (
            <div className="container topContainer">
                <div className="row topConDrops">
                    <div className="col-md d-flex">
                        <div className="dropdown show filterShow">
                            <select onChange={(e) => { e.preventDefault(); props.changePurchasePrice(e.target.value) }} className="rounded-control sorting-select filter-generation ">
                                <option value="">Price</option>
                                <option value="-1">Expensive</option>
                                <option value="1">Cheapest</option>
                            </select>
                            <select onChange={(e) => { e.preventDefault(); props.changePurityPer(e.target.value) }} className="rounded-control sorting-select filter-generation ">
                                <option value="">Purity</option>
                                <option value="-1">Highest</option>
                                <option value="1">Lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-end">
                        <div className="dropdown show">

                        </div>

                    </div>
                </div>
            </div>
        )
}; 

export default Profile