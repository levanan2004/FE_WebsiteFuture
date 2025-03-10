const Footer: React.FC = () => {
  return (
    <div className="flex justify-center py-8 footer-bg border-t-2 bg-black">
      <div className="container mx-auto w-full text-white flex flex-wrap font-semiboldpx-4">
        <div className="md:w-1/2 w-full mb-2 font-bold">
          HỆ THỐNG BÁN ĐỒ CHƠI VÀ HÀNG TIÊU DÙNG TỰ ĐỘNG
          <br /> ĐẢM BẢO HÀNG RẺ VÀ CHẤT LƯỢNG
        </div>
        <div className="md:w-1/2 w-full mb-2">
          CHÚNG TÔI LUÔN LẤY UY TÍN LÀM HÀNG ĐẦU ĐỐI VỚI KHÁCH HÀNG. HI VỌNG SẼ
          ĐƯỢC PHỤC VỤ CÁC BẠN. CẢM ƠN!
        </div>
        <div className="md:w-1/5 w-full mb-2 text-center border-t border-gray-400 pt-2 uppercase">
          <h3 className="text-sm">
            FUTURE SHOP - Mua Bán ĐỒ CHƠI &amp; HÀNG TIÊU DÙNG CHẤT LƯỢNG Giá
            Tốt
          </h3>
          <p className="text-xs">copyright© 2025, futureshop.site</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
