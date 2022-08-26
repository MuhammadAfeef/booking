// import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  // const {data, loading , error} = useFetch("/hotels/countByCity?cities=swat,lahore,islamabad")
  return (
    <div className="featured">
      {/* {loading ? (
        "Loading please wait"
      ) : (
        <> */}
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Swat</h1>
              {/* <h2>{data[0]} properties</h2> */}
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://pakiholic.com/wp-content/uploads/2017/06/1-Alpurai-Swat-KPK-1-640x499.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Islamabad</h1>
              {/* <h2>{data[1]} properties</h2> */}
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/b0/ef/27/b0ef27003e58557179a7842a6a9c46d6.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lahore</h1>
              {/* <h2>{data[2]} properties</h2> */}
            </div>
          </div>
        {/* </>)} */}
    </div>
  );
};

export default Featured;