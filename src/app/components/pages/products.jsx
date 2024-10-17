import { route } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function ProductsPage() {
  return (
    <>
      {/* Our Product */}
      <div className="section-full p-t80">
        <div className="container">
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head text-center">
              <h2 data-title="Products">Products We Shipped</h2>
              <div className="mt-separator-outer m-b30">
                <div className="mt-separator site-bg-primary" />
              </div>
            </div>
            {/* TITLE END */}
            <div className="row d-flex justify-content-center">
              {/* Block 1 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-1.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          All Kinds Of cylinder
                        </NavLink>
                      </h4>

                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 2 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-2.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          Wines And Spirits{" "}
                        </NavLink>
                      </h4>
                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 3 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-3.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          Cloths And Shoes
                        </NavLink>
                      </h4>

                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 4 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-4.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          Cars And Accessories
                        </NavLink>
                      </h4>

                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 5 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-5.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          Cosmetics And Perfumes
                        </NavLink>
                      </h4>

                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 6 */}
              <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-6.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>
                          Steel Pipes And Tubes
                        </NavLink>
                      </h4>

                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured products */}
      <div className="section-full p-t80 p-b50">
        <div className="container">
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head text-center">
              <h2 data-title="Featured">Featured products</h2>
              <div className="mt-separator-outer  m-b30">
                <div className="mt-separator site-bg-primary" />
              </div>
            </div>
            {/* TITLE END */}
            <div className="row">
              {/* Block 1 */}
              <div className="col-lg-3 col-md-6 col-xs-100pc  m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-1.jpg" alt="" />
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>All Kinds Of cylinder</NavLink>
                      </h4>
                      
                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 2 */}
              <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-2.jpg" alt="" />
                   
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>Wines And Spirits</NavLink>
                      </h4>
                      
                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 3 */}
              <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-3.jpg" alt="" />
                  
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>Cloths And Shoes</NavLink>
                      </h4>
                     
                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block 4 */}
              <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                  <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                    <FastImage src="images/products/pic-4.jpg" alt="" />
                    
                  </div>
                  <div className="mt-info  text-center">
                    <div className="p-a10">
                      <h4 className="mt-title">
                        <NavLink>Cars And Accessories</NavLink>
                      </h4>
                      <div className="p-tb15">
                        <button className="site-button" type="button">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsPage;
