// Dữ liệu từ vựng bổ sung cho english://master
// Từ mới:  từ tiếng Anh|nghĩa tiếng Việt|cấp độ (1-3)|mã chủ đề|câu ví dụ|dịch câu ví dụ
// Thêm ví dụ cho từ đã có:  @từ tiếng Anh|câu ví dụ|dịch câu ví dụ
// Tự thêm từ: chỉ cần thêm một dòng đúng định dạng. Không dùng ký tự | trong câu, không dùng dấu ` hay $.
const VOCAB_EXTRA_RAW = `
@look after|My sister looks after our grandmother every weekend.|Chị tôi chăm sóc bà của chúng tôi mỗi cuối tuần.
@look for|I am looking for a quiet café to study in.|Tôi đang tìm một quán cà phê yên tĩnh để học bài.
@give up|Don’t give up, you are almost there!|Đừng bỏ cuộc, bạn sắp làm được rồi!
@find out|I need to find out when the shop opens.|Tôi cần tìm hiểu xem cửa hàng mở cửa lúc nào.
@turn on|Could you turn on the air conditioner, please?|Bạn bật máy lạnh lên giúp tôi được không?
@turn off|Please turn off your phone during the exam.|Vui lòng tắt điện thoại trong giờ thi.
@pick up|I will pick you up at the station at six.|Tôi sẽ đón bạn ở nhà ga lúc sáu giờ.
@put on|It is cold, so put on your jacket.|Trời lạnh nên hãy mặc áo khoác vào.
@take off|Please take off your shoes before you come in.|Vui lòng cởi giày trước khi vào nhà.
@get up|I usually get up at six o’clock.|Tôi thường thức dậy lúc sáu giờ.
@sit down|Please sit down and make yourself comfortable.|Mời bạn ngồi xuống và cứ tự nhiên.
@stand up|Everyone stood up when the teacher came in.|Mọi người đứng dậy khi giáo viên bước vào.
@come back|When are you coming back from your trip?|Khi nào bạn về lại sau chuyến đi?
@go on|Please go on, I am listening.|Bạn cứ tiếp tục đi, tôi đang nghe.
@carry on|Carry on working while I make some tea.|Cứ tiếp tục làm việc trong lúc tôi pha trà nhé.
@break down|Our car broke down on the highway.|Xe của chúng tôi bị hỏng giữa đường cao tốc.
@break up|They broke up after two years together.|Họ chia tay sau hai năm bên nhau.
@grow up|I want to be a doctor when I grow up.|Khi lớn lên tôi muốn làm bác sĩ.
@run out|We have run out of milk again.|Chúng ta lại hết sữa rồi.
@figure out|I can’t figure out how to open this file.|Tôi không tìm ra cách mở tệp này.
@fill in|Please fill in this form with your details.|Vui lòng điền thông tin của bạn vào mẫu này.
@hand in|Students must hand in their homework by Friday.|Học sinh phải nộp bài tập về nhà trước thứ Sáu.
@hang out|We usually hang out at the mall after school.|Chúng tôi thường đi chơi ở trung tâm thương mại sau giờ học.
@call off|The match was called off because of the rain.|Trận đấu bị hủy vì trời mưa.
@check in|You can check in at the hotel after two o’clock.|Bạn có thể nhận phòng khách sạn sau hai giờ chiều.
@check out|We have to check out of the hotel by noon.|Chúng tôi phải trả phòng khách sạn trước giữa trưa.
@set up|She set up her own business last year.|Cô ấy đã thành lập doanh nghiệp riêng vào năm ngoái.
@show up|He didn’t show up for the meeting.|Anh ấy không xuất hiện trong cuộc họp.
@work out|I work out at the gym three times a week.|Tôi tập thể dục ở phòng gym ba lần một tuần.
@bring up|She was brought up by her grandparents.|Cô ấy được ông bà nuôi dạy.
@take care of|Who will take care of the dog while you are away?|Ai sẽ chăm sóc con chó khi bạn đi vắng?
@look forward to|I look forward to hearing from you soon.|Tôi mong sớm nhận được tin từ bạn.
@put off|Don’t put off your homework until the last minute.|Đừng hoãn bài tập đến phút cuối cùng.
@get along|Do you get along with your new colleagues?|Bạn có hòa thuận với các đồng nghiệp mới không?
@come up with|She came up with a brilliant idea for the project.|Cô ấy nghĩ ra một ý tưởng tuyệt vời cho dự án.
@deal with|How do you deal with stress at work?|Bạn xử lý áp lực trong công việc như thế nào?
@break the ice|He told a joke to break the ice at the party.|Anh ấy kể một câu chuyện cười để phá vỡ sự ngượng ngùng ở bữa tiệc.
@piece of cake|The test was a piece of cake.|Bài kiểm tra dễ như ăn kẹo.
@under the weather|I am feeling a bit under the weather today.|Hôm nay tôi thấy trong người không khỏe.
@hit the books|I have to hit the books before the final exam.|Tôi phải chăm chỉ học bài trước kỳ thi cuối kỳ.
@once in a blue moon|We only eat out once in a blue moon.|Chúng tôi chỉ rất hiếm khi ăn ngoài.
@cost an arm and a leg|Living in the city centre costs an arm and a leg.|Sống ở trung tâm thành phố đắt kinh khủng.
@let the cat out of the bag|Who let the cat out of the bag about the surprise party?|Ai đã để lộ bí mật về bữa tiệc bất ngờ vậy?
@on the same page|Let’s make sure we are all on the same page before we start.|Hãy đảm bảo mọi người cùng hiểu như nhau trước khi bắt đầu.
@in the long run|Saving money now will help you in the long run.|Tiết kiệm tiền bây giờ sẽ giúp ích cho bạn về lâu dài.
@call it a day|We are tired, so let’s call it a day.|Chúng ta mệt rồi, nên hãy kết thúc công việc hôm nay thôi.
@kill two birds with one stone|Cycling to work kills two birds with one stone: exercise and transport.|Đạp xe đi làm là một công đôi việc: vừa tập thể dục vừa đi lại.
@break a leg|You have a big show tonight, so break a leg!|Tối nay bạn có buổi diễn lớn, chúc bạn may mắn nhé!
@speak of the devil|Speak of the devil, here comes Tom!|Nhắc Tom thì Tom đến, anh ấy kia rồi!
@beat around the bush|Stop beating around the bush and tell me the truth.|Đừng nói vòng vo nữa, hãy nói thật với tôi đi.
@hit the nail on the head|You hit the nail on the head with that comment.|Bạn nói trúng vấn đề với nhận xét đó.
@get out of hand|The party got out of hand after midnight.|Bữa tiệc vượt tầm kiểm soát sau nửa đêm.
@a blessing in disguise|Losing that job was a blessing in disguise.|Mất công việc đó hóa ra lại là trong cái rủi có cái may.
@back to square one|The deal fell through, so we are back to square one.|Thương vụ bị đổ bể nên chúng tôi quay lại điểm xuất phát.
@bite the bullet|I decided to bite the bullet and see the dentist.|Tôi quyết định cắn răng chịu đựng và đi khám nha sĩ.
@by the book|The police handled the case strictly by the book.|Cảnh sát xử lý vụ việc hoàn toàn theo đúng quy định.
@cutting corners|Cutting corners on safety can be very dangerous.|Làm tắt trong khâu an toàn có thể rất nguy hiểm.
@give someone the benefit of the doubt|I will give him the benefit of the doubt this time.|Lần này tôi sẽ tin anh ấy dù chưa chắc chắn.
@in a nutshell|In a nutshell, the plan failed.|Nói tóm lại, kế hoạch đã thất bại.
@miss the boat|If you wait any longer, you will miss the boat.|Nếu chờ thêm nữa, bạn sẽ bỏ lỡ cơ hội.
@on thin ice|You are on thin ice after being late three times.|Bạn đang ở trong thế rủi ro sau ba lần đi trễ.
@pull yourself together|Pull yourself together and try again.|Hãy trấn tĩnh lại và thử một lần nữa.
@see eye to eye|My boss and I don’t always see eye to eye.|Tôi và sếp không phải lúc nào cũng đồng quan điểm.
@the ball is in your court|I have made my offer, so the ball is in your court.|Tôi đã đưa ra đề nghị rồi, giờ quyền quyết định thuộc về bạn.
@think outside the box|We need to think outside the box to solve this problem.|Chúng ta cần suy nghĩ sáng tạo để giải quyết vấn đề này.
@time flies|Time flies when you are having fun.|Thời gian trôi nhanh khi bạn đang vui vẻ.
@lie down|I need to lie down for a while.|Tôi cần nằm nghỉ một lúc.
@wake up|I woke up at five this morning.|Sáng nay tôi thức dậy lúc năm giờ.
@warm up|Always warm up before you exercise.|Hãy luôn khởi động trước khi tập thể dục.
@save money|I am saving money for a new laptop.|Tôi đang tiết kiệm tiền mua máy tính xách tay mới.
@invite|She invited me to her birthday party.|Cô ấy mời tôi đến tiệc sinh nhật.
@introduce|Let me introduce my friend to you.|Để tôi giới thiệu bạn tôi với bạn.
@complain|Customers often complain about the slow service.|Khách hàng thường phàn nàn về dịch vụ chậm.
@compliment|She smiled at the compliment.|Cô ấy mỉm cười trước lời khen.
@gossip|I don’t like to gossip about my colleagues.|Tôi không thích ngồi lê đôi mách về đồng nghiệp.
@generous|He is generous with his time and money.|Anh ấy hào phóng về thời gian lẫn tiền bạc.
@selfish|Don’t be so selfish, share with your sister.|Đừng ích kỷ như vậy, hãy chia sẻ với em gái.
@honest|I will be honest with you.|Tôi sẽ thành thật với bạn.
@stubborn|My grandfather is very stubborn.|Ông tôi rất bướng bỉnh.
@cheerful|The waiter was cheerful and polite.|Người phục vụ vui vẻ và lịch sự.
@jealous|He felt jealous of his friend’s success.|Anh ấy ghen tị với thành công của bạn mình.
@grateful|I am grateful for your help.|Tôi biết ơn sự giúp đỡ của bạn.
@disappointed|We were disappointed with the result.|Chúng tôi thất vọng với kết quả.
@embarrassed|She felt embarrassed when she forgot his name.|Cô ấy thấy ngượng khi quên tên anh ấy.
@confident|He is confident that he will pass the test.|Anh ấy tự tin rằng mình sẽ đậu kỳ thi.
@curious|Children are naturally curious.|Trẻ em vốn tò mò.
@lonely|He felt lonely in the big city.|Anh ấy cảm thấy cô đơn ở thành phố lớn.
@patient|You need to be patient with young children.|Bạn cần kiên nhẫn với trẻ nhỏ.
@reliable|He is a reliable and hard-working colleague.|Anh ấy là một đồng nghiệp đáng tin cậy và chăm chỉ.
@flexible|We offer flexible working hours.|Chúng tôi áp dụng giờ làm việc linh hoạt.
@efficient|This machine is fast and efficient.|Chiếc máy này nhanh và hiệu quả.
@convenient|The hotel is in a convenient location.|Khách sạn nằm ở vị trí thuận tiện.
@ancient|We visited the ancient temples of Hue.|Chúng tôi thăm các ngôi đền cổ ở Huế.
@modern|The city has many modern buildings.|Thành phố có nhiều tòa nhà hiện đại.
@obvious|The answer is obvious.|Câu trả lời là quá rõ ràng.
@suitable|This film is not suitable for children.|Bộ phim này không phù hợp với trẻ em.
@available|Are you available on Friday afternoon?|Chiều thứ Sáu bạn có rảnh không?
@bitter|This coffee tastes bitter.|Cà phê này có vị đắng.
@crowded|The market is crowded on weekends.|Chợ đông đúc vào cuối tuần.
@noisy|The street is too noisy at night.|Đường phố quá ồn vào ban đêm.
@bargain|This jacket was a real bargain.|Chiếc áo khoác này đúng là món hời.
@refund|I asked for a refund because the shirt was too small.|Tôi yêu cầu hoàn tiền vì chiếc áo quá nhỏ.
@receipt|Keep the receipt in case you want to return it.|Hãy giữ hóa đơn phòng khi bạn muốn trả hàng.
@discount|There is a ten percent discount today.|Hôm nay có giảm giá mười phần trăm.
@warranty|The laptop comes with a two-year warranty.|Chiếc máy tính xách tay được bảo hành hai năm.
@customer|The customer is always right.|Khách hàng luôn luôn đúng.
@cashier|Please pay at the cashier.|Vui lòng thanh toán ở quầy thu ngân.
@budget|We have a tight budget for the trip.|Chúng tôi có ngân sách eo hẹp cho chuyến đi.
@expense|Rent is my biggest monthly expense.|Tiền thuê nhà là khoản chi lớn nhất hằng tháng của tôi.
@income|Their main source of income is farming.|Nguồn thu nhập chính của họ là nông nghiệp.
@debt|He worked hard to pay off his debt.|Anh ấy làm việc chăm chỉ để trả hết nợ.
@loan|They took out a loan to buy a house.|Họ vay tiền để mua nhà.
@profit|The company made a large profit this year.|Công ty đạt lợi nhuận lớn trong năm nay.
@revenue|Online sales increased our revenue.|Bán hàng trực tuyến làm tăng doanh thu của chúng tôi.
@invest|She invested her savings in a small café.|Cô ấy đầu tư khoản tiết kiệm vào một quán cà phê nhỏ.
@negotiate|They negotiated the price for hours.|Họ đàm phán về giá hàng giờ liền.
@contract|Both sides signed the contract.|Cả hai bên đã ký hợp đồng.
@deadline|The deadline for the report is Monday.|Hạn chót nộp báo cáo là thứ Hai.
@colleague|My colleagues are very supportive.|Đồng nghiệp của tôi rất biết giúp đỡ.
@employee|The company has two hundred employees.|Công ty có hai trăm nhân viên.
@employer|My employer offers free lunch.|Chủ của tôi cho ăn trưa miễn phí.
@resign|She resigned after ten years at the company.|Cô ấy xin nghỉ việc sau mười năm ở công ty.
@salary|He earns a good salary.|Anh ấy có mức lương tốt.
@overtime|We worked overtime to finish the order.|Chúng tôi làm thêm giờ để hoàn thành đơn hàng.
@promotion|He is hoping for a promotion this year.|Anh ấy hy vọng được thăng chức trong năm nay.
@interview|I have a job interview tomorrow.|Ngày mai tôi có buổi phỏng vấn xin việc.
@qualification|You need a teaching qualification for this job.|Bạn cần có bằng cấp sư phạm cho công việc này.
@experience|She has five years of experience in sales.|Cô ấy có năm năm kinh nghiệm bán hàng.
@schedule|I have a busy schedule this week.|Tuần này tôi có lịch trình bận rộn.
@agenda|What is on the agenda for today’s meeting?|Chương trình nghị sự của cuộc họp hôm nay có gì?
@teamwork|Good teamwork is the key to success.|Làm việc nhóm tốt là chìa khóa của thành công.
@increase|The number of visitors has increased.|Số lượng du khách đã tăng lên.
@improve|I want to improve my English.|Tôi muốn cải thiện tiếng Anh của mình.
@achieve|She worked hard to achieve her goal.|Cô ấy làm việc chăm chỉ để đạt được mục tiêu.
@encourage|My parents always encourage me to study.|Bố mẹ luôn khuyến khích tôi học tập.
@suggest|I suggest we take a taxi.|Tôi đề xuất chúng ta đi taxi.
@recommend|Can you recommend a good restaurant?|Bạn có thể giới thiệu một nhà hàng ngon không?
@prevent|Washing your hands helps prevent disease.|Rửa tay giúp ngăn ngừa bệnh tật.
@require|This job requires good communication skills.|Công việc này đòi hỏi kỹ năng giao tiếp tốt.
@provide|The hotel provides free breakfast.|Khách sạn cung cấp bữa sáng miễn phí.
@include|The price includes breakfast.|Giá đã bao gồm bữa sáng.
@consider|Please consider my offer carefully.|Xin hãy cân nhắc kỹ đề nghị của tôi.
@compare|Compare the two prices before you buy.|Hãy so sánh hai mức giá trước khi mua.
@demonstrate|The teacher demonstrated how to use the equipment.|Giáo viên trình bày cách sử dụng thiết bị.
@generation|Three generations live in this house.|Ba thế hệ cùng sống trong ngôi nhà này.
@tradition|Giving lucky money at Tet is a Vietnamese tradition.|Lì xì ngày Tết là một truyền thống của người Việt.
@custom|Every country has its own customs.|Mỗi quốc gia đều có phong tục riêng.
@community|The local community built a new library.|Cộng đồng địa phương đã xây một thư viện mới.
@diet|A healthy diet includes lots of vegetables.|Chế độ ăn lành mạnh gồm nhiều rau.
@symptom|A cough is a common symptom of a cold.|Ho là triệu chứng phổ biến của cảm lạnh.
@infection|The wound got an infection.|Vết thương bị nhiễm trùng.
@prescription|You need a prescription for this medicine.|Bạn cần có đơn thuốc cho loại thuốc này.
@recover|He is slowly recovering from his injury.|Anh ấy đang dần hồi phục sau chấn thương.
@injury|A knee injury kept him out of the game.|Một chấn thương đầu gối khiến anh ấy phải nghỉ thi đấu.
@allergy|I have an allergy to peanuts.|Tôi bị dị ứng đậu phộng.
@vaccine|The vaccine protects against the virus.|Vắc-xin bảo vệ chống lại loại vi-rút này.
@fitness|Swimming is a great way to improve fitness.|Bơi lội là cách tuyệt vời để cải thiện thể lực.
@luggage|Please keep your luggage with you at all times.|Vui lòng luôn mang theo hành lý bên mình.
@passport|Don’t forget to bring your passport.|Đừng quên mang theo hộ chiếu.
@departure|The departure time is ten past nine.|Giờ khởi hành là chín giờ mười.
@destination|Our final destination is Da Nang.|Điểm đến cuối cùng của chúng tôi là Đà Nẵng.
@souvenir|I bought a small souvenir for my mother.|Tôi mua một món quà lưu niệm nhỏ cho mẹ.
@sightseeing|We spent the day sightseeing in Hanoi.|Chúng tôi dành cả ngày tham quan ở Hà Nội.
@itinerary|Our itinerary includes three cities.|Lịch trình của chúng tôi gồm ba thành phố.
@accommodation|We booked accommodation near the beach.|Chúng tôi đã đặt chỗ ở gần bãi biển.
@customs|We went through customs quickly.|Chúng tôi qua hải quan rất nhanh.
@delay|The flight has a two-hour delay.|Chuyến bay bị hoãn hai tiếng.
@journey|The journey took five hours.|Chuyến đi mất năm tiếng.
@scenery|The mountain scenery was breathtaking.|Phong cảnh núi non đẹp đến nghẹt thở.
@download|You can download the app for free.|Bạn có thể tải ứng dụng miễn phí.
@upload|I uploaded the photos to the cloud.|Tôi đã tải ảnh lên đám mây.
@password|Choose a strong password for your account.|Hãy chọn mật khẩu mạnh cho tài khoản của bạn.
@update|Please update your phone to the latest version.|Vui lòng cập nhật điện thoại lên phiên bản mới nhất.
@install|It takes a minute to install the software.|Cài đặt phần mềm mất khoảng một phút.
@software|The company develops educational software.|Công ty phát triển phần mềm giáo dục.
@network|The Wi-Fi network is down.|Mạng Wi-Fi bị mất.
@data|The app collects a lot of user data.|Ứng dụng thu thập nhiều dữ liệu người dùng.
@artificial intelligence|Artificial intelligence is changing many industries.|Trí tuệ nhân tạo đang thay đổi nhiều ngành.
@battery|My phone battery runs out quickly.|Pin điện thoại của tôi hết rất nhanh.
@screen|Don’t stare at the screen for too long.|Đừng nhìn chằm chằm vào màn hình quá lâu.
@attachment|Please open the attachment in the email.|Vui lòng mở tệp đính kèm trong email.
@climate|The climate here is hot and humid.|Khí hậu ở đây nóng và ẩm.
@pollution|Air pollution is a serious problem in many cities.|Ô nhiễm không khí là vấn đề nghiêm trọng ở nhiều thành phố.
@recycle|We recycle paper and glass at home.|Chúng tôi tái chế giấy và thủy tinh ở nhà.
@extinct|Many animals are in danger of becoming extinct.|Nhiều loài động vật có nguy cơ tuyệt chủng.
@drought|The drought destroyed the rice crop.|Hạn hán đã phá hủy vụ lúa.
@flood|The flood forced hundreds of families to leave.|Trận lũ buộc hàng trăm gia đình phải rời đi.
@sustainable|We need sustainable ways to produce food.|Chúng ta cần những cách sản xuất thực phẩm bền vững.
@waste|We should reduce food waste.|Chúng ta nên giảm lãng phí thực phẩm.
@fossil fuel|Burning fossil fuels harms the planet.|Đốt nhiên liệu hóa thạch gây hại cho hành tinh.
@conserve|We must conserve water in the dry season.|Chúng ta phải tiết kiệm nước trong mùa khô.
@wildlife|The park protects local wildlife.|Công viên bảo vệ động vật hoang dã địa phương.
@hobby|My hobby is collecting stamps.|Sở thích của tôi là sưu tầm tem.
@hiking|We went hiking in the mountains.|Chúng tôi đi bộ đường dài trên núi.
@audience|The audience clapped loudly.|Khán giả vỗ tay rất to.
@championship|Our team won the championship.|Đội chúng tôi giành chức vô địch.
@opponent|He defeated his opponent in straight sets.|Anh ấy đánh bại đối thủ sau hai set liên tiếp.
@referee|The referee blew the whistle.|Trọng tài thổi còi.
@stadium|The stadium was full of fans.|Sân vận động chật kín cổ động viên.
@training|Daily training is important for athletes.|Việc luyện tập hằng ngày rất quan trọng với vận động viên.
@tournament|She entered a chess tournament.|Cô ấy tham gia một giải cờ vua.
@scholarship|He won a scholarship to study abroad.|Anh ấy giành được học bổng du học.
@lecture|The lecture lasted for two hours.|Bài giảng kéo dài hai tiếng.
@graduate|She graduated from university in 2020.|Cô ấy tốt nghiệp đại học năm 2020.
@subject|My favourite subject is history.|Môn học yêu thích của tôi là lịch sử.
@revise|I need to revise for the exam.|Tôi cần ôn bài cho kỳ thi.
@commute|My commute to work takes forty minutes.|Việc đi làm hằng ngày của tôi mất bốn mươi phút.
@retire|My father retired last year.|Bố tôi đã nghỉ hưu năm ngoái.
@pension|She lives on her pension.|Bà ấy sống bằng lương hưu.
@renovate|They renovated the old kitchen.|Họ đã cải tạo căn bếp cũ.
@appliance|We bought a new kitchen appliance.|Chúng tôi mua một thiết bị gia dụng mới cho nhà bếp.
@ingredient|What are the ingredients of this dish?|Các nguyên liệu của món này là gì?
@recipe|Can you share the recipe with me?|Bạn chia sẻ công thức này với tôi được không?
@spicy|I can’t eat very spicy food.|Tôi không ăn được đồ quá cay.
@humid|It is hot and humid in summer.|Mùa hè trời nóng và ẩm.
@forecast|The weather forecast says it will rain.|Dự báo thời tiết nói rằng trời sẽ mưa.
@breeze|A cool breeze came from the sea.|Một làn gió mát thổi từ biển vào.
@earthquake|The earthquake damaged many buildings.|Trận động đất làm hư hại nhiều tòa nhà.
@valley|A river runs through the green valley.|Một dòng sông chảy qua thung lũng xanh.
@citizen|Every citizen has the right to vote.|Mọi công dân đều có quyền bầu cử.
@election|The election will be held in May.|Cuộc bầu cử sẽ được tổ chức vào tháng Năm.
@policy|The government announced a new education policy.|Chính phủ công bố một chính sách giáo dục mới.
@tax|Income tax has gone up this year.|Thuế thu nhập đã tăng trong năm nay.
@poverty|The project aims to reduce poverty in rural areas.|Dự án nhằm giảm nghèo ở các vùng nông thôn.
@inequality|Income inequality is growing in many countries.|Bất bình đẳng thu nhập đang gia tăng ở nhiều quốc gia.
@reform|The government promised education reform.|Chính phủ hứa hẹn cải cách giáo dục.
@witness|A witness saw the accident.|Một nhân chứng đã nhìn thấy vụ tai nạn.
@evidence|There is no evidence against him.|Không có bằng chứng nào chống lại anh ta.
@sentence|The judge gave him a two-year sentence.|Thẩm phán tuyên anh ta hai năm tù.
@trial|The trial will start next week.|Phiên tòa sẽ bắt đầu vào tuần tới.
@fine|She got a fine for parking on the pavement.|Cô ấy bị phạt vì đậu xe trên vỉa hè.
@violate|The company violated safety rules.|Công ty đã vi phạm quy định an toàn.
@hypothesis|The scientist tested her hypothesis in the lab.|Nhà khoa học kiểm tra giả thuyết của mình trong phòng thí nghiệm.
@experiment|They did an experiment in the chemistry class.|Họ làm một thí nghiệm trong giờ hóa học.
@evolution|Darwin’s theory explains evolution.|Học thuyết của Darwin giải thích sự tiến hóa.
@gravity|Gravity keeps us on the ground.|Trọng lực giữ chúng ta trên mặt đất.
@molecule|Water is made of hydrogen and oxygen molecules.|Nước được tạo thành từ các phân tử hydro và oxy.
@headline|The headline caught everyone’s attention.|Tiêu đề báo thu hút sự chú ý của mọi người.
@broadcast|The match will be broadcast live tonight.|Trận đấu sẽ được phát sóng trực tiếp tối nay.
@journalist|The journalist interviewed the mayor.|Nhà báo phỏng vấn thị trưởng.
@subscribe|I subscribed to her YouTube channel.|Tôi đã đăng ký kênh YouTube của cô ấy.
@influencer|The influencer promoted the new phone on social media.|Người có sức ảnh hưởng quảng bá chiếc điện thoại mới trên mạng xã hội.
act up|hoạt động trục trặc, quậy phá|3|phrasal|My laptop keeps acting up today.|Hôm nay máy tính xách tay của tôi cứ trục trặc.
add up|cộng lại, hợp lý|3|phrasal|His story doesn’t add up.|Câu chuyện của anh ta không hợp lý.
ask out|mời đi chơi, mời hẹn hò|2|phrasal|He asked her out to dinner.|Anh ấy mời cô ấy đi ăn tối.
back up|sao lưu, ủng hộ|2|phrasal|Remember to back up your files every week.|Hãy nhớ sao lưu tệp của bạn mỗi tuần.
blow up|nổ tung, phóng to|3|phrasal|The balloon blew up in his face.|Quả bóng bay nổ tung ngay trước mặt anh ấy.
break in|đột nhập|3|phrasal|Thieves broke in while we were on holiday.|Kẻ trộm đột nhập khi chúng tôi đi nghỉ.
break out|bùng nổ, bùng phát|3|phrasal|A fire broke out in the kitchen.|Một đám cháy bùng phát trong nhà bếp.
bring about|gây ra, mang lại|3|phrasal|The new law brought about major changes.|Luật mới đã mang lại những thay đổi lớn.
bring back|mang trở lại, gợi lại|2|phrasal|This song brings back happy memories.|Bài hát này gợi lại những kỷ niệm đẹp.
bring down|làm giảm, hạ bệ|3|phrasal|The new policy will bring down prices.|Chính sách mới sẽ làm giảm giá cả.
build up|xây dựng dần, tích lũy|3|phrasal|You need to build up your strength slowly.|Bạn cần tăng dần thể lực một cách từ từ.
burn out|kiệt sức|3|phrasal|Many nurses burn out after years of long shifts.|Nhiều y tá bị kiệt sức sau nhiều năm làm ca dài.
call back|gọi lại|2|phrasal|I will call you back in ten minutes.|Tôi sẽ gọi lại cho bạn sau mười phút nữa.
calm down|bình tĩnh lại|2|phrasal|Calm down and tell me what happened.|Bình tĩnh lại và kể cho tôi chuyện gì đã xảy ra.
care about|quan tâm đến|2|phrasal|She really cares about the environment.|Cô ấy thực sự quan tâm đến môi trường.
carry out|thực hiện|3|phrasal|The team carried out a survey last month.|Nhóm đã thực hiện một cuộc khảo sát vào tháng trước.
catch up|bắt kịp, cập nhật tin tức|2|phrasal|Let’s meet for coffee and catch up.|Hãy gặp nhau uống cà phê và hàn huyên nhé.
catch up with|đuổi kịp|2|phrasal|I ran fast to catch up with my friends.|Tôi chạy nhanh để đuổi kịp bạn bè.
chill out|thư giãn|2|phrasal|After the exam, we just chilled out at home.|Sau kỳ thi, chúng tôi chỉ thư giãn ở nhà.
cheer up|vui lên, làm ai vui lên|2|phrasal|Cheer up, things will get better.|Vui lên nào, mọi chuyện sẽ tốt hơn.
clean up|dọn dẹp|2|phrasal|Please clean up your room before dinner.|Hãy dọn phòng của con trước bữa tối.
come across|tình cờ gặp, tình cờ thấy|3|phrasal|I came across an old photo in the drawer.|Tôi tình cờ thấy một tấm ảnh cũ trong ngăn kéo.
come down with|bị ốm, mắc bệnh|3|phrasal|She came down with the flu last week.|Tuần trước cô ấy bị cúm.
come in|đi vào, vào trong|1|phrasal|Please come in and take a seat.|Mời vào và ngồi xuống.
come on|nhanh lên, cố lên|2|phrasal|Come on, we are going to be late!|Nhanh lên, chúng ta sắp trễ rồi!
come out|ra mắt, xuất hiện|2|phrasal|Her new album comes out next month.|Album mới của cô ấy sẽ ra mắt vào tháng sau.
count on|trông cậy vào|3|phrasal|You can always count on me.|Bạn luôn có thể trông cậy vào tôi.
cut down on|cắt giảm|3|phrasal|I am trying to cut down on sugar.|Tôi đang cố gắng giảm lượng đường.
cut off|cắt đứt, ngắt|3|phrasal|The storm cut off the power in the area.|Cơn bão làm mất điện cả khu vực.
dress up|ăn mặc chỉnh tề, hóa trang|2|phrasal|Children love to dress up for Halloween.|Trẻ em thích hóa trang vào dịp Halloween.
drop by|ghé qua|2|phrasal|Feel free to drop by anytime.|Bạn cứ ghé qua bất cứ lúc nào nhé.
drop off|thả xuống, đưa đến|2|phrasal|I will drop the kids off at school.|Tôi sẽ đưa bọn trẻ đến trường.
drop out|bỏ học giữa chừng|3|phrasal|He dropped out of university in his second year.|Anh ấy bỏ học đại học năm thứ hai.
eat out|ăn ở ngoài|1|phrasal|We eat out every Friday night.|Chúng tôi ăn ngoài vào mỗi tối thứ Sáu.
end up|rốt cuộc, kết thúc ở|2|phrasal|We ended up staying at home.|Rốt cuộc chúng tôi ở nhà.
fall apart|tan vỡ, sụp đổ|3|phrasal|Their plan fell apart at the last minute.|Kế hoạch của họ sụp đổ vào phút chót.
fall behind|tụt lại phía sau|3|phrasal|Don’t fall behind with your rent.|Đừng để chậm trả tiền thuê nhà.
fall for|phải lòng, bị lừa|3|phrasal|He fell for her at first sight.|Anh ấy phải lòng cô ấy ngay từ cái nhìn đầu tiên.
fall out|cãi nhau, rụng|3|phrasal|The two brothers fell out over money.|Hai anh em cãi nhau vì tiền bạc.
fit in|hòa nhập|3|phrasal|It took a while to fit in at my new school.|Tôi mất một thời gian để hòa nhập ở trường mới.
get away|trốn thoát, đi nghỉ|2|phrasal|We need to get away for a few days.|Chúng ta cần đi nghỉ vài ngày.
get back|quay về, lấy lại|2|phrasal|I got back from work at eight.|Tôi đi làm về lúc tám giờ.
get by|xoay xở, sống qua ngày|3|phrasal|It is hard to get by on a small salary.|Thật khó xoay xở với mức lương thấp.
get over|vượt qua, hồi phục|3|phrasal|It took her weeks to get over the flu.|Cô ấy mất nhiều tuần để khỏi cúm.
get through|vượt qua, hoàn thành|3|phrasal|We got through the exam week together.|Chúng tôi cùng nhau vượt qua tuần thi.
get together|tụ họp|2|phrasal|Let’s get together this weekend.|Cuối tuần này chúng ta tụ họp nhé.
give away|cho đi, tiết lộ|3|phrasal|She gave away all her old clothes.|Cô ấy cho đi tất cả quần áo cũ.
give back|trả lại|2|phrasal|Please give back my book tomorrow.|Ngày mai nhớ trả lại sách cho tôi nhé.
give in|nhượng bộ, đầu hàng|3|phrasal|He finally gave in and let us go.|Cuối cùng ông ấy nhượng bộ và cho chúng tôi đi.
give out|phân phát, cạn kiệt|3|phrasal|The teacher gave out the test papers.|Giáo viên phát bài kiểm tra.
go ahead|cứ tiến hành|2|phrasal|You can go ahead and start without me.|Bạn cứ bắt đầu mà không cần tôi.
go away|đi chỗ khác, biến mất|1|phrasal|Go away, I am busy!|Đi chỗ khác đi, tôi đang bận!
go down|giảm xuống, đi xuống|2|phrasal|Prices have gone down this year.|Giá cả năm nay đã giảm.
go out|đi chơi, tắt (đèn, lửa)|1|phrasal|Do you want to go out tonight?|Tối nay bạn có muốn đi chơi không?
go over|xem lại, kiểm tra|3|phrasal|Let’s go over the plan once more.|Hãy xem lại kế hoạch một lần nữa.
go through|trải qua, xem xét kỹ|3|phrasal|She went through a difficult time last year.|Năm ngoái cô ấy đã trải qua một giai đoạn khó khăn.
go up|tăng lên|2|phrasal|The price of petrol has gone up again.|Giá xăng lại tăng lên.
hang on|đợi một chút|2|phrasal|Hang on, I will be right back.|Đợi chút, tôi quay lại ngay.
hang up|cúp máy, treo lên|2|phrasal|He hung up before I could explain.|Anh ấy cúp máy trước khi tôi kịp giải thích.
head for|hướng về|3|phrasal|We are heading for the airport now.|Chúng tôi đang hướng về sân bay.
hold on|giữ chặt, chờ máy|2|phrasal|Hold on tight, the road is bumpy.|Giữ chặt nhé, đường xóc lắm.
hold up|trì hoãn, cướp|3|phrasal|Traffic held us up for an hour.|Kẹt xe làm chúng tôi bị trễ một tiếng.
keep on|tiếp tục|2|phrasal|Keep on trying and you will succeed.|Cứ tiếp tục cố gắng thì bạn sẽ thành công.
keep up with|theo kịp|3|phrasal|It is hard to keep up with new technology.|Thật khó để theo kịp công nghệ mới.
knock down|đánh sập, đánh ngã|3|phrasal|They knocked down the old building.|Họ phá sập tòa nhà cũ.
lay off|sa thải|3|phrasal|The company laid off fifty workers.|Công ty đã sa thải năm mươi công nhân.
leave out|bỏ sót, loại ra|3|phrasal|Don’t leave out any important details.|Đừng bỏ sót bất kỳ chi tiết quan trọng nào.
let down|làm ai thất vọng|3|phrasal|I don’t want to let my team down.|Tôi không muốn làm đội của mình thất vọng.
let in|cho vào|2|phrasal|Please let the cat in.|Làm ơn cho con mèo vào nhà.
log in|đăng nhập|2|phrasal|You need to log in to see your account.|Bạn cần đăng nhập để xem tài khoản.
log out|đăng xuất|2|phrasal|Don’t forget to log out of your account.|Đừng quên đăng xuất khỏi tài khoản.
look around|nhìn quanh, xem xung quanh|2|phrasal|We looked around the old town all afternoon.|Chúng tôi đi dạo quanh phố cổ cả buổi chiều.
look down on|coi thường|3|phrasal|Never look down on people who work hard.|Đừng bao giờ coi thường những người làm việc chăm chỉ.
look into|điều tra, xem xét|3|phrasal|The police are looking into the case.|Cảnh sát đang điều tra vụ việc.
look out|cẩn thận|2|phrasal|Look out! There is a car coming.|Cẩn thận! Có xe đang tới.
look up|tra cứu|2|phrasal|Look up the word in the dictionary.|Hãy tra từ này trong từ điển.
look up to|ngưỡng mộ|3|phrasal|I really look up to my older sister.|Tôi rất ngưỡng mộ chị gái mình.
make up|bịa ra, làm lành, trang điểm|3|phrasal|He made up an excuse for being late.|Anh ta bịa ra một lý do cho việc đến muộn.
make up for|bù đắp|3|phrasal|I will make up for the lost time.|Tôi sẽ bù lại thời gian đã mất.
mix up|nhầm lẫn|3|phrasal|I always mix up their names.|Tôi luôn nhầm tên của họ.
move in|dọn vào ở|2|phrasal|We moved in last Saturday.|Chúng tôi đã dọn vào hôm thứ Bảy tuần trước.
move on|bước tiếp, tiếp tục|3|phrasal|It is time to move on and forget the past.|Đã đến lúc bước tiếp và quên đi quá khứ.
move out|dọn đi|2|phrasal|She moved out of her parents’ house at twenty.|Cô ấy dọn ra khỏi nhà bố mẹ năm hai mươi tuổi.
pass away|qua đời|3|phrasal|His grandfather passed away last year.|Ông của anh ấy qua đời năm ngoái.
pass out|ngất xỉu, phát đi|3|phrasal|She passed out from the heat.|Cô ấy ngất xỉu vì nóng.
pay back|trả lại tiền|2|phrasal|I will pay you back next week.|Tuần sau tôi sẽ trả lại tiền cho bạn.
pay off|trả hết nợ, có kết quả tốt|3|phrasal|All her hard work finally paid off.|Mọi nỗ lực của cô ấy cuối cùng cũng đơm hoa kết trái.
point out|chỉ ra|3|phrasal|She pointed out several mistakes in my essay.|Cô ấy chỉ ra vài lỗi trong bài luận của tôi.
put away|cất đi|2|phrasal|Put your toys away before bed.|Hãy cất đồ chơi đi trước khi đi ngủ.
put down|đặt xuống, ghi lại|2|phrasal|Put down your pen and listen.|Đặt bút xuống và lắng nghe.
put out|dập tắt|3|phrasal|The firefighters put out the fire quickly.|Lính cứu hỏa dập tắt đám cháy rất nhanh.
put up with|chịu đựng|3|phrasal|I can’t put up with this noise any longer.|Tôi không thể chịu đựng tiếng ồn này thêm nữa.
run away|chạy trốn|2|phrasal|The boy ran away from the barking dog.|Cậu bé chạy trốn khỏi con chó đang sủa.
run into|tình cờ gặp|3|phrasal|I ran into an old friend at the supermarket.|Tôi tình cờ gặp một người bạn cũ ở siêu thị.
run over|cán qua|3|phrasal|The cat was nearly run over by a bus.|Con mèo suýt bị xe buýt cán.
see off|tiễn|3|phrasal|We went to the airport to see her off.|Chúng tôi ra sân bay tiễn cô ấy.
sell out|bán hết|3|phrasal|The tickets sold out in minutes.|Vé đã bán hết chỉ trong vài phút.
send off|gửi đi|2|phrasal|I will send off the parcel this afternoon.|Chiều nay tôi sẽ gửi bưu kiện đi.
set off|khởi hành|2|phrasal|We set off early to avoid the traffic.|Chúng tôi khởi hành sớm để tránh kẹt xe.
settle down|ổn định cuộc sống|3|phrasal|They want to settle down and start a family.|Họ muốn ổn định cuộc sống và lập gia đình.
show off|khoe khoang|3|phrasal|He likes to show off his new car.|Anh ta thích khoe chiếc xe mới của mình.
shut down|đóng cửa, tắt máy|3|phrasal|The factory shut down last year.|Nhà máy đã đóng cửa vào năm ngoái.
sign up|đăng ký|2|phrasal|I signed up for an English course.|Tôi đã đăng ký một khóa học tiếng Anh.
slow down|chậm lại|2|phrasal|Slow down, you are driving too fast.|Chạy chậm lại đi, bạn đang lái quá nhanh.
speak up|nói to lên, lên tiếng|2|phrasal|Could you speak up a little, please?|Bạn nói to lên một chút được không?
split up|chia tay, chia ra|3|phrasal|The band split up in 2010.|Ban nhạc tan rã vào năm 2010.
stand for|viết tắt của, đại diện cho|3|phrasal|What does UN stand for?|UN là viết tắt của từ gì?
stand out|nổi bật|3|phrasal|Her red coat really stands out in the crowd.|Chiếc áo khoác đỏ của cô ấy nổi bật giữa đám đông.
stay up|thức khuya|2|phrasal|I stayed up late to finish my report.|Tôi thức khuya để hoàn thành báo cáo.
step down|từ chức|3|phrasal|The manager will step down next month.|Giám đốc sẽ từ chức vào tháng tới.
switch off|tắt (thiết bị)|2|phrasal|Switch off the lights when you leave.|Hãy tắt đèn khi bạn rời đi.
switch on|bật (thiết bị)|2|phrasal|Switch on the TV, the news is starting.|Bật tivi lên, bản tin sắp bắt đầu rồi.
take after|giống (người thân)|3|phrasal|She takes after her mother.|Cô ấy giống mẹ.
take apart|tháo rời|3|phrasal|He took the radio apart to fix it.|Anh ấy tháo chiếc radio ra để sửa.
take away|mang đi, lấy đi|2|phrasal|Can I have a pizza to take away?|Cho tôi một chiếc pizza mang đi được không?
take down|ghi lại, gỡ xuống|3|phrasal|Please take down my phone number.|Làm ơn ghi lại số điện thoại của tôi.
take in|hiểu, tiếp thu, lừa|3|phrasal|It was too much information to take in.|Có quá nhiều thông tin để tiếp thu.
take on|đảm nhận, thuê|3|phrasal|She took on extra work to earn more.|Cô ấy nhận thêm việc để kiếm thêm tiền.
take over|tiếp quản|3|phrasal|He will take over the company next year.|Anh ấy sẽ tiếp quản công ty vào năm tới.
take up|bắt đầu (sở thích), chiếm (không gian)|3|phrasal|I took up yoga last month.|Tháng trước tôi bắt đầu tập yoga.
talk over|bàn bạc|3|phrasal|Let’s talk it over before we decide.|Hãy bàn bạc kỹ trước khi quyết định.
tear up|xé nát|3|phrasal|She tore up the letter in anger.|Cô ấy tức giận xé nát bức thư.
tell off|mắng, khiển trách|3|phrasal|The teacher told him off for being late.|Giáo viên mắng cậu ấy vì đi muộn.
think over|cân nhắc kỹ|3|phrasal|I need time to think it over.|Tôi cần thời gian để cân nhắc kỹ.
throw away|vứt đi|2|phrasal|Don’t throw away that box, I can use it.|Đừng vứt cái hộp đó đi, tôi dùng được.
throw up|nôn mửa|3|phrasal|The baby threw up after drinking milk.|Em bé nôn sau khi uống sữa.
try on|thử (quần áo)|2|phrasal|Can I try on this jacket?|Tôi thử chiếc áo khoác này được không?
try out|dùng thử|3|phrasal|We are trying out a new software this week.|Tuần này chúng tôi đang dùng thử một phần mềm mới.
turn down|từ chối, vặn nhỏ|3|phrasal|He turned down the job offer.|Anh ấy từ chối lời mời làm việc.
turn into|biến thành|3|phrasal|The caterpillar turned into a butterfly.|Con sâu bướm biến thành một con bướm.
turn out|hóa ra, kết quả là|3|phrasal|The party turned out to be a lot of fun.|Bữa tiệc hóa ra rất vui.
turn up|xuất hiện, vặn to|3|phrasal|Please turn up the volume a little.|Làm ơn vặn to âm lượng lên một chút.
use up|dùng hết|3|phrasal|We have used up all the paper.|Chúng tôi đã dùng hết giấy rồi.
watch out|coi chừng|2|phrasal|Watch out for the wet floor!|Coi chừng sàn nhà ướt!
wear out|mòn, làm kiệt sức|3|phrasal|My shoes are completely worn out.|Đôi giày của tôi mòn hết rồi.
wipe out|xóa sạch, tiêu diệt|3|phrasal|The flood wiped out the whole village.|Trận lũ đã xóa sổ cả ngôi làng.
work on|làm việc về, cải thiện|2|phrasal|I am working on my pronunciation.|Tôi đang luyện tập để cải thiện phát âm.
wrap up|kết thúc, gói lại|3|phrasal|Let’s wrap up the meeting now.|Chúng ta kết thúc cuộc họp thôi.
write down|ghi lại|1|phrasal|Please write down your address.|Vui lòng ghi lại địa chỉ của bạn.
make a decision|đưa ra quyết định|2|collocation|It is time to make a decision.|Đã đến lúc đưa ra quyết định.
make a mistake|mắc lỗi|1|collocation|Everyone makes a mistake sometimes.|Ai cũng có lúc mắc lỗi.
make progress|tiến bộ|2|collocation|You are making great progress in English.|Bạn đang tiến bộ rất nhiều trong tiếng Anh.
make an effort|nỗ lực|2|collocation|She made an effort to speak clearly.|Cô ấy cố gắng nói thật rõ ràng.
make a difference|tạo ra sự khác biệt|2|collocation|Small actions can make a big difference.|Những hành động nhỏ có thể tạo ra khác biệt lớn.
make money|kiếm tiền|1|collocation|He wants to make money from his hobby.|Anh ấy muốn kiếm tiền từ sở thích của mình.
make friends|kết bạn|1|collocation|It is easy to make friends at university.|Kết bạn ở đại học rất dễ.
make a suggestion|đưa ra gợi ý|2|collocation|Can I make a suggestion?|Tôi có thể đưa ra một gợi ý không?
make a complaint|khiếu nại|3|collocation|I would like to make a complaint about the service.|Tôi muốn khiếu nại về dịch vụ.
make an appointment|đặt lịch hẹn|2|collocation|I need to make an appointment with the dentist.|Tôi cần đặt lịch hẹn với nha sĩ.
make a living|kiếm sống|3|collocation|He makes a living as a freelance writer.|Anh ấy kiếm sống bằng nghề viết tự do.
make sense|có nghĩa, hợp lý|2|collocation|Your explanation makes sense to me.|Lời giải thích của bạn nghe hợp lý với tôi.
make a speech|phát biểu|2|collocation|The mayor made a speech at the ceremony.|Thị trưởng đã phát biểu tại buổi lễ.
make a plan|lập kế hoạch|1|collocation|Let’s make a plan for the trip.|Hãy lập kế hoạch cho chuyến đi.
make a promise|hứa|2|collocation|Never make a promise you can’t keep.|Đừng bao giờ hứa điều mình không giữ được.
do homework|làm bài tập về nhà|1|collocation|I do my homework after dinner.|Tôi làm bài tập về nhà sau bữa tối.
do the dishes|rửa chén bát|1|collocation|Who is going to do the dishes tonight?|Tối nay ai sẽ rửa chén?
do the shopping|đi mua sắm đồ dùng|1|collocation|I do the shopping on Saturday mornings.|Tôi đi chợ vào sáng thứ Bảy.
do the laundry|giặt đồ|1|collocation|I do the laundry once a week.|Tôi giặt đồ mỗi tuần một lần.
do research|nghiên cứu|2|collocation|She is doing research on climate change.|Cô ấy đang nghiên cứu về biến đổi khí hậu.
do business|làm ăn, kinh doanh|2|collocation|We do business with many foreign companies.|Chúng tôi làm ăn với nhiều công ty nước ngoài.
do your best|cố gắng hết sức|1|collocation|Just do your best and don’t worry.|Cứ cố gắng hết sức và đừng lo lắng.
do someone a favour|giúp đỡ ai một việc|2|collocation|Could you do me a favour?|Bạn có thể giúp tôi một việc không?
do damage|gây thiệt hại|3|collocation|The storm did serious damage to the crops.|Cơn bão gây thiệt hại nghiêm trọng cho mùa màng.
do exercise|tập thể dục|1|collocation|You should do exercise every day.|Bạn nên tập thể dục mỗi ngày.
take a break|nghỉ giải lao|1|collocation|Let’s take a break for ten minutes.|Hãy nghỉ giải lao mười phút.
take a look|xem qua|1|collocation|Take a look at this photo.|Hãy xem qua bức ảnh này.
take a chance|thử vận may|2|collocation|Sometimes you have to take a chance.|Đôi khi bạn phải thử vận may.
take advantage of|tận dụng|3|collocation|Take advantage of the discount while it lasts.|Hãy tận dụng đợt giảm giá khi còn thời gian.
take part in|tham gia|2|collocation|Over a hundred people took part in the race.|Hơn một trăm người tham gia cuộc đua.
take place|diễn ra|2|collocation|The meeting will take place on Monday.|Cuộc họp sẽ diễn ra vào thứ Hai.
take responsibility|chịu trách nhiệm|3|collocation|He refused to take responsibility for the error.|Anh ta từ chối chịu trách nhiệm về lỗi đó.
take a photo|chụp ảnh|1|collocation|Can you take a photo of us?|Bạn chụp giúp chúng tôi một tấm ảnh được không?
take a seat|ngồi xuống|1|collocation|Please take a seat, the doctor will see you soon.|Mời ngồi, bác sĩ sẽ gặp bạn ngay.
take a risk|chấp nhận rủi ro|2|collocation|Successful people are willing to take a risk.|Người thành công sẵn sàng chấp nhận rủi ro.
take notes|ghi chép|1|collocation|I always take notes during lectures.|Tôi luôn ghi chép trong giờ giảng.
take into account|tính đến, cân nhắc|3|collocation|We must take safety into account.|Chúng ta phải tính đến vấn đề an toàn.
take a deep breath|hít một hơi thật sâu|2|collocation|Take a deep breath and relax.|Hãy hít một hơi thật sâu và thư giãn.
have a look|xem|1|collocation|Let me have a look at your homework.|Để tôi xem bài tập của bạn.
have a conversation|trò chuyện|2|collocation|We had a long conversation about our future.|Chúng tôi đã trò chuyện lâu về tương lai.
have an argument|cãi nhau|2|collocation|They had an argument about money.|Họ cãi nhau về tiền bạc.
have a good time|vui vẻ|1|collocation|I hope you have a good time at the party.|Mong bạn vui vẻ ở bữa tiệc.
have an impact on|có tác động đến|3|collocation|Social media has a huge impact on teenagers.|Mạng xã hội có tác động rất lớn đến thanh thiếu niên.
have a headache|bị đau đầu|1|collocation|I have a terrible headache today.|Hôm nay tôi bị đau đầu dữ dội.
have a go|thử một lần|2|collocation|Why don’t you have a go at cooking?|Sao bạn không thử nấu ăn xem?
have a word with|nói chuyện riêng với|3|collocation|Can I have a word with you in private?|Tôi nói chuyện riêng với bạn một lát được không?
have in common|có điểm chung|3|collocation|We have a lot in common.|Chúng tôi có nhiều điểm chung.
get a job|tìm được việc làm|1|collocation|She got a job at a bank.|Cô ấy tìm được việc ở một ngân hàng.
get a promotion|được thăng chức|3|collocation|He got a promotion after two years.|Anh ấy được thăng chức sau hai năm.
get married|kết hôn|1|collocation|They are getting married in June.|Họ sẽ kết hôn vào tháng Sáu.
get lost|bị lạc|1|collocation|We got lost in the old town.|Chúng tôi bị lạc trong khu phố cổ.
get angry|nổi giận|1|collocation|Don’t get angry over small things.|Đừng nổi giận vì những chuyện nhỏ.
get a ticket|mua vé, bị phạt|1|collocation|I got a ticket for speeding.|Tôi bị phạt vì chạy quá tốc độ.
get in touch|liên lạc|2|collocation|Please get in touch if you need help.|Hãy liên lạc với tôi nếu bạn cần giúp đỡ.
get the point|hiểu ý|2|collocation|I get the point, thank you.|Tôi hiểu ý rồi, cảm ơn bạn.
get rid of|loại bỏ|3|collocation|We need to get rid of these old boxes.|Chúng ta cần loại bỏ những chiếc hộp cũ này.
pay attention to|chú ý đến|2|collocation|Please pay attention to the instructions.|Vui lòng chú ý đến hướng dẫn.
pay a visit|ghé thăm|3|collocation|We paid a visit to our old teacher.|Chúng tôi đến thăm thầy giáo cũ.
pay a compliment|khen ngợi|3|collocation|He paid her a compliment on her dress.|Anh ấy khen chiếc váy của cô ấy.
pay in cash|trả bằng tiền mặt|2|collocation|Do you want to pay in cash or by card?|Bạn muốn trả bằng tiền mặt hay thẻ?
pay a fine|nộp phạt|3|collocation|He had to pay a fine for parking illegally.|Anh ấy phải nộp phạt vì đậu xe trái phép.
give advice|đưa ra lời khuyên|2|collocation|Can you give me some advice?|Bạn có thể cho tôi vài lời khuyên không?
give a presentation|thuyết trình|2|collocation|She gave a presentation to the whole class.|Cô ấy thuyết trình trước cả lớp.
give a hand|giúp một tay|2|collocation|Can you give me a hand with this box?|Bạn giúp tôi một tay với cái hộp này được không?
give priority to|ưu tiên|3|collocation|The hospital gives priority to emergency cases.|Bệnh viện ưu tiên các ca cấp cứu.
give way|nhường đường|2|collocation|You must give way to traffic from the right.|Bạn phải nhường đường cho xe bên phải.
keep a secret|giữ bí mật|2|collocation|Can you keep a secret?|Bạn giữ được bí mật không?
keep in mind|ghi nhớ|2|collocation|Keep in mind that the shop closes at six.|Hãy nhớ rằng cửa hàng đóng cửa lúc sáu giờ.
keep in touch|giữ liên lạc|2|collocation|Let’s keep in touch after graduation.|Hãy giữ liên lạc sau khi tốt nghiệp nhé.
keep a promise|giữ lời hứa|2|collocation|He always keeps his promises.|Anh ấy luôn giữ lời hứa.
keep calm|giữ bình tĩnh|1|collocation|Keep calm and follow the instructions.|Hãy giữ bình tĩnh và làm theo hướng dẫn.
keep track of|theo dõi|3|collocation|I use an app to keep track of my spending.|Tôi dùng một ứng dụng để theo dõi chi tiêu.
keep up the good work|tiếp tục làm tốt|2|collocation|You are doing well, keep up the good work!|Bạn đang làm tốt lắm, hãy tiếp tục nhé!
break a promise|thất hứa|2|collocation|He broke his promise again.|Anh ta lại thất hứa.
break the law|vi phạm pháp luật|3|collocation|Anyone who breaks the law will be punished.|Ai vi phạm pháp luật sẽ bị trừng phạt.
break a record|phá kỷ lục|3|collocation|She broke the world record in the 100 metres.|Cô ấy phá kỷ lục thế giới ở nội dung 100 mét.
break the news|báo tin|3|collocation|It was hard to break the news to her parents.|Thật khó để báo tin cho bố mẹ cô ấy.
catch a cold|bị cảm lạnh|1|collocation|Wear a scarf, or you will catch a cold.|Hãy quàng khăn, nếu không bạn sẽ bị cảm.
catch the bus|bắt xe buýt|1|collocation|I catch the bus to work every morning.|Sáng nào tôi cũng bắt xe buýt đi làm.
catch someone’s attention|thu hút sự chú ý của ai|3|collocation|The bright poster caught my attention.|Tấm áp phích sáng màu thu hút sự chú ý của tôi.
catch fire|bốc cháy|3|collocation|The old house caught fire at night.|Ngôi nhà cũ bốc cháy vào ban đêm.
run a business|điều hành doanh nghiệp|3|collocation|She runs a small business selling soap.|Cô ấy điều hành một cơ sở nhỏ bán xà phòng.
run a risk|đối mặt với rủi ro|3|collocation|If you drive tired, you run a serious risk.|Nếu lái xe khi mệt, bạn đang đối mặt rủi ro nghiêm trọng.
run out of time|hết thời gian|2|collocation|We ran out of time before we finished.|Chúng tôi hết thời gian trước khi làm xong.
set a goal|đặt mục tiêu|2|collocation|It is important to set a goal for yourself.|Đặt mục tiêu cho bản thân là điều quan trọng.
set an example|làm gương|3|collocation|Parents should set a good example for their children.|Cha mẹ nên làm gương tốt cho con cái.
set the table|dọn bàn ăn|1|collocation|Please set the table for dinner.|Hãy dọn bàn cho bữa tối.
set a deadline|đặt hạn chót|3|collocation|The manager set a deadline for Friday.|Quản lý đặt hạn chót vào thứ Sáu.
set an alarm|hẹn giờ báo thức|1|collocation|I set an alarm for six o’clock.|Tôi hẹn báo thức lúc sáu giờ.
save time|tiết kiệm thời gian|1|collocation|Taking the train will save time.|Đi tàu sẽ tiết kiệm thời gian.
waste time|lãng phí thời gian|1|collocation|Don’t waste time on social media.|Đừng lãng phí thời gian vào mạng xã hội.
spend time|dành thời gian|1|collocation|I like to spend time with my family.|Tôi thích dành thời gian cho gia đình.
spend money on|chi tiền cho|2|collocation|She spends a lot of money on clothes.|Cô ấy chi rất nhiều tiền cho quần áo.
lose weight|giảm cân|1|collocation|He wants to lose weight before summer.|Anh ấy muốn giảm cân trước mùa hè.
gain weight|tăng cân|2|collocation|I gained weight during the holidays.|Tôi tăng cân trong kỳ nghỉ lễ.
lose track of time|quên mất thời gian|3|collocation|I lost track of time while reading.|Tôi quên mất thời gian khi đang đọc sách.
lose your temper|mất bình tĩnh, nổi nóng|3|collocation|He lost his temper and shouted at us.|Anh ta nổi nóng và hét vào mặt chúng tôi.
lose touch|mất liên lạc|3|collocation|We lost touch after she moved abroad.|Chúng tôi mất liên lạc sau khi cô ấy ra nước ngoài.
reach an agreement|đạt được thỏa thuận|3|collocation|The two sides finally reached an agreement.|Hai bên cuối cùng đã đạt được thỏa thuận.
reach a conclusion|đi đến kết luận|3|collocation|We reached a conclusion after a long discussion.|Chúng tôi đi đến kết luận sau cuộc thảo luận dài.
draw a conclusion|rút ra kết luận|3|collocation|It is too early to draw a conclusion.|Còn quá sớm để rút ra kết luận.
draw attention to|thu hút sự chú ý đến|3|collocation|The report draws attention to the problem of pollution.|Bản báo cáo thu hút sự chú ý đến vấn đề ô nhiễm.
meet a deadline|kịp hạn chót|3|collocation|We worked all night to meet the deadline.|Chúng tôi làm việc suốt đêm để kịp hạn chót.
meet the requirements|đáp ứng yêu cầu|3|collocation|You must meet the requirements to apply.|Bạn phải đáp ứng các yêu cầu để nộp đơn.
play a role|đóng vai trò|2|collocation|Teachers play an important role in society.|Giáo viên đóng vai trò quan trọng trong xã hội.
play a part in|góp phần vào|3|collocation|Everyone played a part in the team’s success.|Mọi người đều góp phần vào thành công của đội.
raise awareness|nâng cao nhận thức|3|collocation|The campaign aims to raise awareness of recycling.|Chiến dịch nhằm nâng cao nhận thức về tái chế.
raise a question|đặt ra câu hỏi|3|collocation|His comment raises an interesting question.|Nhận xét của anh ấy đặt ra một câu hỏi thú vị.
raise money|gây quỹ|3|collocation|They held a concert to raise money for charity.|Họ tổ chức buổi hòa nhạc để gây quỹ từ thiện.
solve a problem|giải quyết vấn đề|1|collocation|We need to solve this problem quickly.|Chúng ta cần giải quyết vấn đề này nhanh chóng.
face a challenge|đối mặt với thử thách|3|collocation|Every business faces challenges.|Doanh nghiệp nào cũng phải đối mặt với thử thách.
express an opinion|bày tỏ ý kiến|3|collocation|Everyone has the right to express an opinion.|Mọi người đều có quyền bày tỏ ý kiến.
share an opinion|chia sẻ quan điểm|2|collocation|I would like to share my opinion on this topic.|Tôi muốn chia sẻ quan điểm của mình về chủ đề này.
lack of confidence|thiếu tự tin|3|collocation|Her main problem is a lack of confidence.|Vấn đề chính của cô ấy là thiếu tự tin.
heavy traffic|giao thông đông đúc|2|collocation|We were late because of heavy traffic.|Chúng tôi đến muộn vì giao thông đông đúc.
heavy rain|mưa lớn|1|collocation|Heavy rain is expected tomorrow.|Ngày mai dự báo có mưa lớn.
strong coffee|cà phê đậm|1|collocation|I need a cup of strong coffee.|Tôi cần một tách cà phê đậm.
fast food|đồ ăn nhanh|1|collocation|Eating too much fast food is unhealthy.|Ăn quá nhiều đồ ăn nhanh không tốt cho sức khỏe.
close friend|bạn thân|1|collocation|She is a close friend of mine.|Cô ấy là một người bạn thân của tôi.
hard work|sự chăm chỉ|1|collocation|Success comes from hard work.|Thành công đến từ sự chăm chỉ.
high price|giá cao|1|collocation|The high price put many people off.|Giá cao khiến nhiều người nản lòng.
low price|giá thấp|1|collocation|This shop offers low prices on all goods.|Cửa hàng này bán mọi mặt hàng với giá thấp.
great deal of|rất nhiều|3|collocation|He spent a great deal of money on the project.|Anh ấy chi rất nhiều tiền cho dự án.
major problem|vấn đề lớn|2|collocation|Pollution is a major problem in big cities.|Ô nhiễm là vấn đề lớn ở các thành phố lớn.
serious illness|bệnh nghiêm trọng|2|collocation|She recovered from a serious illness.|Cô ấy đã hồi phục sau một căn bệnh nghiêm trọng.
common sense|lẽ thường, óc phán đoán|3|collocation|Use your common sense before you decide.|Hãy dùng lẽ thường trước khi quyết định.
fresh air|không khí trong lành|1|collocation|Let’s go for a walk and get some fresh air.|Hãy đi dạo để hít thở không khí trong lành.
full-time job|công việc toàn thời gian|2|collocation|She has a full-time job and studies at night.|Cô ấy có công việc toàn thời gian và học buổi tối.
part-time job|công việc bán thời gian|2|collocation|Many students have a part-time job.|Nhiều sinh viên có công việc bán thời gian.
public transport|phương tiện công cộng|2|collocation|I travel by public transport to save money.|Tôi đi bằng phương tiện công cộng để tiết kiệm tiền.
traffic jam|kẹt xe|1|collocation|We got stuck in a traffic jam for two hours.|Chúng tôi bị kẹt xe suốt hai tiếng.
peace and quiet|sự yên tĩnh|3|collocation|I came here for some peace and quiet.|Tôi đến đây để tìm sự yên tĩnh.
safe and sound|bình an vô sự|3|collocation|They arrived home safe and sound.|Họ về đến nhà bình an vô sự.
sooner or later|sớm muộn gì|3|collocation|Sooner or later, you will have to decide.|Sớm muộn gì bạn cũng phải quyết định.
more or less|ít nhiều, gần như|3|collocation|The work is more or less finished.|Công việc gần như đã xong.
on purpose|cố ý|3|collocation|I didn’t break it on purpose.|Tôi không cố ý làm vỡ nó.
by accident|tình cờ, vô tình|2|collocation|I deleted the file by accident.|Tôi vô tình xóa mất tệp.
by mistake|do nhầm lẫn|2|collocation|I took your umbrella by mistake.|Tôi cầm nhầm ô của bạn.
in advance|trước, từ trước|2|collocation|You should book tickets in advance.|Bạn nên đặt vé trước.
in charge of|phụ trách|3|collocation|She is in charge of the marketing team.|Cô ấy phụ trách đội marketing.
in danger|gặp nguy hiểm|2|collocation|The forest is in danger of disappearing.|Khu rừng đang có nguy cơ biến mất.
in demand|có nhu cầu cao|3|collocation|Nurses are in demand all over the world.|Y tá được cần đến trên khắp thế giới.
in fact|thực tế là|2|collocation|In fact, I have never been abroad.|Thực tế là tôi chưa bao giờ ra nước ngoài.
in particular|đặc biệt|3|collocation|I like fruit, mangoes in particular.|Tôi thích trái cây, đặc biệt là xoài.
on behalf of|thay mặt cho|3|collocation|I am writing on behalf of the whole team.|Tôi viết thư này thay mặt cho cả nhóm.
on time|đúng giờ|1|collocation|The train arrived on time.|Chuyến tàu đến đúng giờ.
on average|trung bình|2|collocation|On average, I sleep seven hours a night.|Trung bình tôi ngủ bảy tiếng mỗi đêm.
out of date|lỗi thời|3|collocation|This map is out of date.|Tấm bản đồ này đã lỗi thời.
out of order|hỏng, không hoạt động|2|collocation|The lift is out of order today.|Hôm nay thang máy bị hỏng.
at risk|có nguy cơ|3|collocation|Children are most at risk from this disease.|Trẻ em có nguy cơ cao nhất với căn bệnh này.
at least|ít nhất|1|collocation|You should drink at least two litres of water a day.|Bạn nên uống ít nhất hai lít nước mỗi ngày.
at the moment|hiện giờ|1|collocation|I am busy at the moment.|Hiện giờ tôi đang bận.
under pressure|chịu áp lực|3|collocation|She works well under pressure.|Cô ấy làm việc tốt dưới áp lực.
under control|trong tầm kiểm soát|3|collocation|The situation is now under control.|Tình hình giờ đã trong tầm kiểm soát.
according to|theo như|2|collocation|According to the forecast, it will rain tomorrow.|Theo dự báo, ngày mai trời sẽ mưa.
apply for a job|nộp đơn xin việc|2|collocation|I applied for a job at a local company.|Tôi đã nộp đơn xin việc ở một công ty địa phương.
depend on|phụ thuộc vào|2|collocation|It depends on the weather.|Việc đó phụ thuộc vào thời tiết.
suffer from|chịu đựng, bị (bệnh)|3|collocation|He suffers from back pain.|Anh ấy bị đau lưng.
be good at|giỏi về|1|collocation|She is good at mathematics.|Cô ấy giỏi toán.
be interested in|quan tâm đến|1|collocation|I am interested in learning French.|Tôi quan tâm đến việc học tiếng Pháp.
be responsible for|chịu trách nhiệm về|3|collocation|Who is responsible for this project?|Ai chịu trách nhiệm về dự án này?
be famous for|nổi tiếng vì|2|collocation|Da Lat is famous for its cool weather.|Đà Lạt nổi tiếng vì thời tiết mát mẻ.
be afraid of|sợ|1|collocation|Many people are afraid of spiders.|Nhiều người sợ nhện.
be fond of|yêu thích|3|collocation|She is very fond of her little brother.|Cô ấy rất quý em trai mình.
be aware of|nhận thức được|3|collocation|Are you aware of the risks?|Bạn có nhận thức được những rủi ro không?
neighbour|hàng xóm|1|social|My neighbour has a friendly dog.|Hàng xóm của tôi có một con chó thân thiện.
stranger|người lạ|1|social|Don’t talk to strangers online.|Đừng nói chuyện với người lạ trên mạng.
guest|khách|1|social|We have guests coming tonight.|Tối nay nhà chúng tôi có khách.
apologise|xin lỗi|2|social|He apologised for being late.|Anh ấy xin lỗi vì đến muộn.
reputation|danh tiếng|3|social|The restaurant has a good reputation.|Nhà hàng này có danh tiếng tốt.
anxious|lo lắng|3|emotion|She felt anxious before the interview.|Cô ấy cảm thấy lo lắng trước buổi phỏng vấn.
ambitious|đầy tham vọng|3|emotion|She is an ambitious young lawyer.|Cô ấy là một luật sư trẻ đầy tham vọng.
fragile|dễ vỡ|3|adj2|Be careful, this box is fragile.|Cẩn thận, chiếc hộp này dễ vỡ.
enormous|khổng lồ|2|adj2|They live in an enormous house.|Họ sống trong một ngôi nhà khổng lồ.
tiny|nhỏ xíu|2|adj2|There is a tiny hole in my sock.|Có một lỗ nhỏ xíu trên chiếc tất của tôi.
essential|thiết yếu|3|adj2|Water is essential for life.|Nước là thiết yếu cho sự sống.
valuable|có giá trị|3|adj2|The museum has many valuable paintings.|Bảo tàng có nhiều bức tranh giá trị.
temporary|tạm thời|3|adj2|This is only a temporary solution.|Đây chỉ là giải pháp tạm thời.
permanent|vĩnh viễn, lâu dài|3|adj2|She is looking for a permanent job.|Cô ấy đang tìm một công việc lâu dài.
familiar|quen thuộc|2|adj2|Her face looks familiar.|Gương mặt cô ấy trông quen quen.
accurate|chính xác|3|adj2|The report must be accurate.|Bản báo cáo phải chính xác.
afford|đủ khả năng chi trả|2|shopping|I can’t afford a new phone right now.|Hiện giờ tôi không đủ tiền mua điện thoại mới.
interest rate|lãi suất|3|business|The bank has raised its interest rate.|Ngân hàng đã tăng lãi suất.
supplier|nhà cung cấp|3|business|We are looking for a new supplier.|Chúng tôi đang tìm một nhà cung cấp mới.
priority|điều ưu tiên|3|work|Safety is our top priority.|An toàn là ưu tiên hàng đầu của chúng tôi.
workload|khối lượng công việc|3|work|My workload has doubled this month.|Khối lượng công việc của tôi đã tăng gấp đôi trong tháng này.
reduce|giảm|2|verb3|We need to reduce plastic waste.|Chúng ta cần giảm rác thải nhựa.
persuade|thuyết phục|3|verb3|I persuaded him to see a doctor.|Tôi đã thuyết phục anh ấy đi khám bác sĩ.
convince|làm cho tin|3|verb3|She convinced me that it was safe.|Cô ấy làm tôi tin rằng điều đó an toàn.
avoid|tránh|2|verb3|Try to avoid sugary drinks.|Hãy cố gắng tránh đồ uống có đường.
involve|liên quan, bao gồm|3|verb3|The job involves a lot of travel.|Công việc này bao gồm nhiều chuyến đi.
estimate|ước tính|3|verb3|They estimate the cost at ten million dong.|Họ ước tính chi phí khoảng mười triệu đồng.
predict|dự đoán|3|verb3|No one can predict the future.|Không ai có thể dự đoán tương lai.
observe|quan sát|3|verb3|Scientists observe the stars at night.|Các nhà khoa học quan sát các vì sao vào ban đêm.
inhabitant|cư dân|3|social|The island has about two hundred inhabitants.|Hòn đảo có khoảng hai trăm cư dân.
celebrate|ăn mừng, kỷ niệm|1|social|We celebrate my birthday with a small party.|Chúng tôi tổ chức sinh nhật của tôi bằng một bữa tiệc nhỏ.
volunteer|tình nguyện viên|2|social|She works as a volunteer at the shelter.|Cô ấy làm tình nguyện viên ở trại cứu trợ.
charity|tổ chức từ thiện|2|social|He gives money to charity every year.|Mỗi năm anh ấy đều quyên tiền cho từ thiện.
exhausted|kiệt sức|2|health|I was exhausted after the long flight.|Tôi kiệt sức sau chuyến bay dài.
sprain|bong gân|3|health|She sprained her ankle playing football.|Cô ấy bị bong gân mắt cá khi chơi bóng đá.
sore throat|đau họng|1|health|I have a sore throat and a cough.|Tôi bị đau họng và ho.
cancel|hủy|2|travel|The airline cancelled our flight.|Hãng hàng không đã hủy chuyến bay của chúng tôi.
board|lên (tàu, máy bay)|2|travel|Passengers can board the plane now.|Hành khách có thể lên máy bay bây giờ.
privacy|quyền riêng tư|3|tech|Social media raises concerns about privacy.|Mạng xã hội làm dấy lên lo ngại về quyền riêng tư.
browse|duyệt web, xem lướt|2|tech|I browsed the internet for cheap flights.|Tôi lướt web tìm vé máy bay rẻ.
renewable|có thể tái tạo|3|environment|Solar power is a renewable energy source.|Năng lượng mặt trời là nguồn năng lượng tái tạo.
gardening|làm vườn|2|hobby|My grandmother loves gardening.|Bà tôi rất thích làm vườn.
painting|hội họa, bức tranh|2|hobby|Painting helps me relax.|Vẽ tranh giúp tôi thư giãn.
board game|trò chơi cờ bàn|2|hobby|We played a board game after dinner.|Chúng tôi chơi một trò cờ bàn sau bữa tối.
assignment|bài tập, nhiệm vụ|2|school|The assignment is due on Monday.|Bài tập phải nộp vào thứ Hai.
semester|học kỳ|2|school|The new semester starts in September.|Học kỳ mới bắt đầu vào tháng Chín.
tuition|học phí|3|school|Tuition fees are rising every year.|Học phí tăng lên mỗi năm.
pronunciation|cách phát âm|2|school|Her pronunciation is very clear.|Cách phát âm của cô ấy rất rõ ràng.
vocabulary|từ vựng|1|school|Reading helps you learn new vocabulary.|Đọc sách giúp bạn học từ vựng mới.
fluent|lưu loát|2|school|She is fluent in three languages.|Cô ấy nói lưu loát ba ngôn ngữ.
translate|dịch|2|school|Can you translate this sentence into English?|Bạn dịch câu này sang tiếng Anh được không?
the last straw|giọt nước làm tràn ly|3|idiom|His rude comment was the last straw.|Lời nhận xét thô lỗ của anh ta là giọt nước làm tràn ly.
spill the beans|tiết lộ bí mật|3|idiom|Come on, spill the beans, what happened?|Nào, nói ra đi, chuyện gì đã xảy ra?
in hot water|gặp rắc rối|3|idiom|He is in hot water for missing the deadline.|Anh ấy đang gặp rắc rối vì lỡ hạn chót.
go the extra mile|nỗ lực hơn mức yêu cầu|3|idiom|Our staff always go the extra mile for customers.|Nhân viên của chúng tôi luôn nỗ lực hơn mức yêu cầu vì khách hàng.
jump on the bandwagon|chạy theo trào lưu|3|idiom|Many companies jumped on the bandwagon and started selling online.|Nhiều công ty chạy theo trào lưu và bắt đầu bán hàng trực tuyến.
out of the blue|bất ngờ, đột ngột|3|idiom|She called me out of the blue yesterday.|Hôm qua cô ấy bất ngờ gọi cho tôi.
pull someone’s leg|trêu chọc ai|3|idiom|Are you serious or are you pulling my leg?|Bạn nghiêm túc hay đang trêu tôi vậy?
on the ball|nhanh nhạy, giỏi nắm bắt|3|idiom|Our new manager is really on the ball.|Quản lý mới của chúng tôi thật sự rất nhanh nhạy.
get cold feet|chùn bước vì lo sợ|3|idiom|He got cold feet just before the wedding.|Anh ấy chùn bước ngay trước đám cưới.
hit the sack|đi ngủ|3|idiom|I am exhausted, so I am going to hit the sack.|Tôi kiệt sức rồi nên tôi đi ngủ đây.
sit on the fence|trung lập, không chọn phe|3|idiom|Don’t sit on the fence, tell us what you think.|Đừng đứng giữa, hãy nói bạn nghĩ gì.
cry over spilled milk|tiếc nuối chuyện đã rồi|3|idiom|It’s done, so there is no use crying over spilled milk.|Việc đã rồi, tiếc nuối cũng chẳng ích gì.
burn the midnight oil|thức khuya làm việc|3|idiom|She burned the midnight oil to finish her thesis.|Cô ấy thức khuya để hoàn thành luận văn.
bend over backwards|cố gắng hết sức giúp đỡ|3|idiom|They bent over backwards to make us feel welcome.|Họ cố gắng hết sức để chúng tôi cảm thấy được chào đón.
face the music|đối mặt với hậu quả|3|idiom|You broke it, so you have to face the music.|Bạn làm hỏng nó thì phải đối mặt với hậu quả.
go back to the drawing board|làm lại từ đầu|3|idiom|The design failed, so we must go back to the drawing board.|Thiết kế thất bại nên chúng ta phải làm lại từ đầu.
keep an eye on|để mắt đến|3|idiom|Could you keep an eye on my bag for a minute?|Bạn trông giúp túi của tôi một phút được không?
make ends meet|xoay xở đủ sống|3|idiom|It is hard to make ends meet on one income.|Thật khó xoay xở đủ sống chỉ với một nguồn thu nhập.
steal the show|chiếm trọn sự chú ý|3|idiom|The little girl stole the show with her dance.|Cô bé chiếm trọn sự chú ý với màn nhảy của mình.
take it easy|thư giãn, đừng lo|3|idiom|Take it easy, you don’t have to hurry.|Cứ thư thả, bạn không cần phải vội.
the tip of the iceberg|phần nổi của tảng băng chìm|3|idiom|These complaints are just the tip of the iceberg.|Những lời phàn nàn này chỉ là phần nổi của tảng băng chìm.
turn a blind eye|nhắm mắt làm ngơ|3|idiom|The teacher turned a blind eye to the cheating.|Giáo viên nhắm mắt làm ngơ trước việc gian lận.
up in the air|chưa quyết định|3|idiom|Our holiday plans are still up in the air.|Kế hoạch đi nghỉ của chúng tôi vẫn chưa quyết định.
word of mouth|truyền miệng|3|idiom|The restaurant became popular by word of mouth.|Nhà hàng trở nên nổi tiếng nhờ truyền miệng.
add insult to injury|đã khổ lại thêm khổ|3|idiom|He lost his job, and to add insult to injury, his car broke down.|Anh ấy mất việc, rồi đã khổ lại thêm khổ khi xe cũng hỏng.
barking up the wrong tree|nhầm đối tượng|3|idiom|If you think I took it, you are barking up the wrong tree.|Nếu bạn nghĩ tôi lấy nó thì bạn nhầm người rồi.
cut to the chase|đi thẳng vào vấn đề|3|idiom|Let’s cut to the chase and discuss the price.|Hãy đi thẳng vào vấn đề và bàn về giá.
easier said than done|nói thì dễ làm thì khó|3|idiom|Quitting smoking is easier said than done.|Bỏ thuốc lá nói thì dễ làm thì khó.
get the ball rolling|bắt đầu, khởi động|3|idiom|Let’s get the ball rolling with a short introduction.|Hãy bắt đầu bằng một lời giới thiệu ngắn.
go with the flow|thuận theo hoàn cảnh|3|idiom|I don’t plan too much, I just go with the flow.|Tôi không lên kế hoạch nhiều, cứ thuận theo hoàn cảnh.
hang in there|cố lên, đừng bỏ cuộc|3|idiom|Hang in there, the exams will be over soon.|Cố lên, kỳ thi sắp xong rồi.
in the same boat|cùng cảnh ngộ|3|idiom|We are all in the same boat when it comes to rising prices.|Về chuyện giá cả leo thang thì chúng ta cùng cảnh ngộ.
let sleeping dogs lie|đừng khơi lại chuyện cũ|3|idiom|It is better to let sleeping dogs lie.|Tốt hơn là đừng khơi lại chuyện cũ.
on cloud nine|vui sướng tột độ|3|idiom|She was on cloud nine after getting the job.|Cô ấy vui sướng tột độ sau khi nhận được việc.
play it by ear|tùy cơ ứng biến|3|idiom|We have no plan, so let’s play it by ear.|Chúng ta chưa có kế hoạch nên cứ tùy cơ ứng biến.
rain or shine|dù mưa hay nắng|3|idiom|The market opens every day, rain or shine.|Chợ mở cửa mỗi ngày, dù mưa hay nắng.
right off the bat|ngay lập tức|3|idiom|I liked her right off the bat.|Tôi quý cô ấy ngay từ đầu.
run out of steam|cạn sức|3|idiom|By the end of the project, we ran out of steam.|Đến cuối dự án, chúng tôi cạn sức.
stay in the loop|nắm được thông tin|3|idiom|Please keep me in the loop about the project.|Vui lòng cập nhật cho tôi về dự án nhé.
the best of both worlds|lợi cả đôi đường|3|idiom|Working from home gives you the best of both worlds.|Làm việc ở nhà mang lại cho bạn lợi cả đôi đường.
throw in the towel|bỏ cuộc|3|idiom|After three failures, he threw in the towel.|Sau ba lần thất bại, anh ấy bỏ cuộc.
walk on eggshells|nói năng, hành xử rón rén|3|idiom|I have to walk on eggshells around my angry boss.|Tôi phải hành xử rón rén khi ở gần ông sếp hay nổi giận.
work like a dog|làm việc vất vả|3|idiom|He works like a dog to support his family.|Anh ấy làm việc vất vả để nuôi gia đình.
you can’t judge a book by its cover|đừng đánh giá qua vẻ bề ngoài|3|idiom|He looks scary, but you can’t judge a book by its cover.|Anh ấy trông đáng sợ nhưng đừng đánh giá qua vẻ bề ngoài.
landlord|chủ nhà (cho thuê)|2|house|The landlord is raising the rent.|Chủ nhà đang tăng tiền thuê.
tenant|người thuê nhà|3|house|The tenants must pay rent on the first of the month.|Người thuê nhà phải trả tiền vào ngày đầu tháng.
mortgage|khoản vay thế chấp mua nhà|3|house|They are still paying their mortgage.|Họ vẫn đang trả khoản vay mua nhà.
spacious|rộng rãi|2|house|The apartment is bright and spacious.|Căn hộ sáng sủa và rộng rãi.
cosy|ấm cúng|2|house|It is a cosy little cottage.|Đó là một ngôi nhà nhỏ ấm cúng.
tidy|gọn gàng|2|house|Keep your desk neat and tidy.|Hãy giữ bàn học gọn gàng.
leak|rò rỉ|3|house|There is a leak in the bathroom ceiling.|Trần nhà tắm bị dột.
nutritious|bổ dưỡng|3|food|Eggs are cheap and nutritious.|Trứng vừa rẻ vừa bổ dưỡng.
appetite|sự thèm ăn|3|food|I lost my appetite when I was ill.|Tôi mất cảm giác thèm ăn khi bị ốm.
flavour|hương vị|2|food|The soup has a rich flavour.|Món súp có hương vị đậm đà.
vegetarian|người ăn chay|2|food|My sister is a vegetarian.|Chị tôi là người ăn chay.
leftovers|thức ăn thừa|2|food|We had the leftovers for lunch.|Chúng tôi ăn thức ăn thừa vào bữa trưa.
beverage|đồ uống|3|food|Hot and cold beverages are available.|Có cả đồ uống nóng và lạnh.
dessert|món tráng miệng|1|food|We had ice cream for dessert.|Chúng tôi ăn kem làm món tráng miệng.
mild|nhẹ, ôn hòa|2|nature|The winter here is quite mild.|Mùa đông ở đây khá ôn hòa.
thunderstorm|cơn giông|3|nature|A thunderstorm is coming this evening.|Tối nay sắp có giông.
cliff|vách đá|3|nature|They stood at the edge of the cliff.|Họ đứng ở mép vách đá.
rural|thuộc nông thôn|3|nature|Rural areas often lack good schools.|Các vùng nông thôn thường thiếu trường học tốt.
urban|thuộc đô thị|3|nature|More people are moving to urban areas.|Ngày càng nhiều người chuyển đến các khu đô thị.
immigrant|người nhập cư|3|politics|Many immigrants work in the construction industry.|Nhiều người nhập cư làm trong ngành xây dựng.
unemployment|thất nghiệp|3|politics|Unemployment is a serious problem for young people.|Thất nghiệp là vấn đề nghiêm trọng với người trẻ.
analyse|phân tích|3|science|We need to analyse the data carefully.|Chúng ta cần phân tích dữ liệu cẩn thận.
`;
