Aboutus = React.createClass({
    displayName : 'Aboutus',
    render(){
        return(
            <div className="row">
                <div className="col s12">
                    <h3>PriceBuddy</h3>
                    <h5>Website này để làm gì?</h5>
                    <p>Website này sẽ giúp bạn theo dõi giá của 1 hoặc nhiều sản phẩm trên các trang thương mại điện tử uy tín ở Việt Nam (Lazada, NguyenKim, Pico, TranAnh...), khi nào các sản phẩm đó hạ xuống 1 mức giá do bạn chọn, hệ thống của chúng tôi sẽ gửi 1 email thông báo cho bạn biết, hy vọng bạn sẽ tiết kiệm được 1 khoản tiền.</p>
                    <h5>Có lưu ý nào không?</h5>
                    <p>Có, tất cả các liên kết sản phẩm có thể chứa mã tiếp thị liên kết, 1 số vị trí trên trang có thể sẽ hiển thị quảng cáo, mục đích giúp chúng tôi có 1 khoản phí để duy trì hệ thống này (Tên miền, máy chủ, hệ thống email...)<br/> Bạn cũng nên đọc về <a href="/privacy-policy">Chính sách bảo mật thông tin</a> của chúng tôi.</p>
                    <h5>Công nghệ sử dụng để xây dựng website này</h5>
                    <p>Chúng tôi dùng <a href="https://www.meteor.com" target="_blank">MeteorJS</a>, <a href="https://www.mongodb.org/" target="_blank">MongoDB</a>, <a href="http://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="http://materializecss.com/" target="_blank">MaterializeCss</a> để lập trình PriceBuddy.</p>
                    <h5>Làm thế nào để liên hệ?</h5>
                    <p>Bạn liên hệ theo Email : <a href="mailto:admin@pricebuddy.xyz">admin@pricebuddy.xyz</a></p>
                </div>
            </div>
        )
    }
})