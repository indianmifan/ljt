var flag=0;
var flagg_=1
//alert(flag)
//<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br> 
//flag of compensation= 91
var compensation="《中华人民共和国邮政法》第四十七条　邮政企业对给据邮件的损失依照下列规定赔偿： \n\n<br>(一)保价的给据邮件丢失或者全部损毁的，按照保价额赔偿;部分损毁或者内件短少的，按照保价额与邮件全部价值的比例对邮件的实际损失予以赔偿。 \n\n<br>(二)未保价的给据邮件丢失、损毁或者内件短少的，按照实际损失赔偿，但最高赔偿额不超过所收取资费的三倍;挂号信件丢失、损毁的，按照所收取资费的三倍予以赔偿。 \n\n<br>即 若您已保价，则按照保价时约定的赔付标准进行赔付 \n\n<br>若您未保价，对您的赔偿不超过邮费的3倍 \n\n<br>因此建议您对贵重物品的邮寄快递进行保价 \n\n<br>"

var pre0="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=1,appendText()'>1.快递问题  </a><br><a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=2,appendText()'>2.网络贷款问题</a> <br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=3,appendText()'>3.手机软件扣费  </a><br>  <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=4,appendText()'>4.医疗问题 </a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=5,appendText()'>5.商标或关键词侵权问题 </a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=6,appendText()'>6.网络购物问题</a><br><a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=7,appendText()'>7.投资理财被诈骗问题</a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=8,appendText()'>8. 发票问题</a>   <a href='https://koubei.baidu.com/m2' target='_self' >9.其他问题</a><br>" 
var pre1="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=11,appendText()' >1.1 快递太慢</a><br><a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=12,appendText()' >1.2 快递丢失</a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=13,appendText()' >1.3 快递物件损坏</a><br>  "
var pre11="您好，根据您反映的情况，由于工作失误，快递对您的快件送达延误，给您造成损失对此，建议您登录<a href=' http://sswz.spb.gov.cn/' class='res-link' target='_self'  > 国家邮政局申诉网站</a> 电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理）  \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。 \n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉；  \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果  \n\n<br>      鼓励您增强维权意识！ \n\n<br><a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br> "+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre12=" 您好，根据您反映的情况，由于工作失误，快递运送过程中，导致快递丢失，给您造成损失，对此，建议您登录<a href=' http://sswz.spb.gov.cn/' class='res-link' target='_self' onclick='flagg_=91,appendText()' > 国家邮政局申诉网站</a>  电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理） \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。\n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉； \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果 \n\n<br>      鼓励您增强维权意识！"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre13=" 您好，根据您反映的情况，由于工作失误，快递运送过程中，导致快递损坏，给您造成损失，对此，建议您登录 <a href=' http://sswz.spb.gov.cn/' class='res-link' target='_self' onclick='flagg_=91,appendText()' > 国家邮政局申诉网站</a>  电话（当地区号+024-12305） 微信（邮政业消费者申诉）进行投诉，并保留好您所有的证据，等待对方处理。 （注意需满足申诉条件：①已向企业投诉，但七天内没有任何处理结果 ②已向企业投诉，但对企业的处理结果不满意。投诉方可被受理） \n\n<br>    根据《邮政业消费者申诉处理办法》 第八条 消费者申诉受理范围： （二）经营快递业务企业的快递业务服务质量问题。 第十条 邮政业消费者申诉中心应当及时受理消费者申诉。消费者采取电话方式申诉，应当及时接听，并告知申诉人处理流程与时限。消费者采取网上、书信、传真形式申诉，应当于两个工作日内处理。\n\n<br> 第十四条 被申诉企业收到邮政业消费者申诉中心转办的申诉后应当按照以下情形妥善处理： （一）对确认企业负有责任的申诉，应当依法赔偿消费者损失或者向消费者致歉； \n\n<br>第十五条 被申诉企业应当按照如下要求，自收到转办申诉之日起十五日内向转办申诉的邮政业消费者申诉中心答复处理结果 \n\n<br>      鼓励您增强维权意识！\n\n<br><a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=91,appendText()' >了解赔偿标准</a><br>\n\n<br>"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre2="您好，对于您的遭遇表示遗憾，根据您的描述，有以下意见。\n\n<br>首先，根据《关于审理民间借贷案件适用法律若干问题的意见》；第二十六条　借贷双方约定的利率未超过年利率24%，出借人请求借款人按照约定的利率支付利息的，人民法院应予支持。 借贷双方约定的利率超过年利率36%，超过部分的利息约定无效。借款人请求出借人返还已支付的超过年利率36%部分的利息的，人民法院应予支持。 民间借贷利率在24%以上36%以下的部分，借款人根据约定已经给付的，也是受法律保护的利息。未给付的，出借人到法院起诉索要的，法院不予支持。也就是说，这部分利息是自愿给付的利息。 您可以对其年利率进行计算，若超过36%的部分法院不予支持，您可以不予支付，支付了也可以要回。若利率在36%以下，非常遗憾的是属于您与对方自愿协商的利息，您需要支付。希望可以减少您的损失\n\n<br>"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre3="您好，对您的遭遇表示遗憾，根据您的描述，我有以下意见。<br> 1、首先，我们还是要先知道扣费的原因，这样通过运营商客服就可以知道，然后和客服说明情况，如果不是自己的原因产生的费用，就可以退回所扣费用，48小时之内，所扣费用就会充回您的账户。但是这种情况下，客服一般不会主动给你恢复，如果在你的要求下，客服仍然不解决问题，直接向运营公司投诉。\n\n<br> 2、我们应该尽量避免再次发生此类情况。下载手机软件之前一定要安装安全软件。 在安全中心设置所有安全项目。这样在我们安装一个软件的时候，会提示我们软件是否安全，可以有效避免扣费。 然后，下载软件请一定认准官方正品。 不要随意下载软件，需要的软件，下载之前一定要确认是官方正品，否则尽量不要下载。\n\n<br> 3、发生下载软件自动扣费的情况时，请及时送去修理。 一旦发现手机软件扣费，要马上确认手机是否中病毒或者存在其他漏洞，如果有病毒或者有自己不明白的情况，要及时送去售后处理。避免继续扣费。\n\n<br>"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";


var pre4="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=41,appendText()' >4.1 医疗过程中又不必要的检查项目和药物</a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=42,appendText()' >4.2 医疗过程中药物或诊费过高</a><br>";
var pre41="《侵权责任法》第六十三条 医疗机构及其医务人员不得违反诊疗规范实施不必要的检查。《医疗机构管理条例》第三十七条，医疗机构必须按照人民政府或者物价部门的有关规定收取医疗费用,详列细项,并出具收据。<br>\n" + "第一，针对医疗价格的疑问，建议查询当地医疗价格收费标准，医疗服务价格。 <br>\n" + "第二，治疗没效果问题，建议还是到当地人民医院一类的大医院检查一下，找出问题所在。是否确实是研究所医生的问题，还是其他未知因素。<br>\n" + " 第三，开药剂量超标的问题。根据不同的实际情况，每种病需要的药剂量不同，每个医生开药的剂量，也会因人而异。<br>\n" + "当然，也有可能是该医院企图多卖药，所以不顾身体情况，要求多用药，对身体和金钱都造成了不必要的损害。建议先向该医生提出疑问，要求其做出解答，并出示必要性证明。如果确实存在故意售药行为，可以向当地食品药品监督管理部门进行投诉。电话12331\n"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var  pre42="《医疗机构管理条例》第三十七条，医疗机构必须按照人民政府或者物价部门的有关规定收取医疗费用,详列细项,并出具收据。 <br>\n" +
	"建议您登陆物价部门网站查询具体医药价格进行比对，。如果确实存在恶意高价，可以向当地食品药品监督管理部门进行投诉。电话12331<br>\n"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre5="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=51,appendText()' >5.1我的商标被他人冒用</a><br> <a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=52,appendText()' >5.2 我的关键词被占用</a><br>";
var pre52="确定关键词侵权后，分三步走： 第一步：收集证据。 证据是决定案件结果的重要因素，权利人对侵权证据收集的是否全面、准确、充分，直接关系到法院最终的事实认定和裁判结果，也是计算损失赔偿的主要依据，起到切实维护商标权权利人合法权益的作用 第二步：请求工商行政管理部门处理。 既可以是侵权人所在地的工商行政管理部门，也可以是侵权行为地的工商行政管理部门。 第三步：向人民法院起诉。 关键词侵权案件可以由侵权行为地或者侵权人所在地人民法院管辖。对此，被侵权人可以自主选择侵权行为地或侵权人所在地人民法院起诉。同时，由于关键词侵权案件较为复杂，建议您根据具体情况决定"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre51="确定商标侵权后，分三步走： 第一步：收集证据。 证据是决定案件结果的重要因素，权利人对侵权证据收集的是否全面、准确、充分，直接关系到法院最终的事实认定和裁判结果，也是计算损失赔偿的主要依据，起到切实维护商标权权利人合法权益的作用 第二步：请求工商行政管理部门处理。 既可以是侵权人所在地的工商行政管理部门，也可以是侵权行为地的工商行政管理部门。 第三步：向人民法院起诉。 商标侵权案件可以由侵权行为地或者侵权人所在地人民法院管辖。对此，被侵权人可以自主选择侵权行为地或侵权人所在地人民法院起诉。同时，由于商标侵权案件较为复杂，建议您根据具体情况决定"+
"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";


var pre6="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=61,appendText()' >6.1 网络购物付款后对方不发货</a><br>"+
	"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=62,appendText()' >6.2网购货物质量有问题</a><br>"+
	"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=63,appendText()' >6.3申请退货退款过程中的问题</a><br>"+
	"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=64,appendText()' >6.4 商品描述与实物不符</a><br>";

var pre61="一.\t法条依据<br>\n" +
	"《中华人民共和国合同法》第107条规定，当事人一方不履行合同义务或者履行合同义务不符合约定的，应当承担继续履行、采取补救措施或者赔偿损失等违约责任。<br>\n" +
	"\n" +
	"二.\t建议<br>\n" +
	"1.\t您可以拨打12315向消费者协会投诉此情况，交由消费者协会对您所反映的情况进行调查、调解；<br>\n" +
	"2.\t您可以选择通过网络向消费者协会投诉此情况，如果您想了解具体的投诉方法与流程，可以通过该网址了解相关信息：http://m.cca.cn/tsdh/lc.html<br>\n" +
	"3.您可以向工商行政管理部门进行举报，交由其处理；<br>\n" +
	"4.鉴于有多家公司有类似遭遇且所涉及的款项较大，该公司的行为可能构成了诈骗罪，建议您方与其他有类似遭遇的公司取得联系并及时向当地公安局报案。同时，建议您尽可能多地搜集相关证据，例如：与该公司签订的买卖合同、付款的转账证明等。<br>\n" +
	"（若有很多其他消费者遇到了相似的情况，可以建议消费者联合解决问题）\n"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre62="一.\t法条依据<br>\n" +
	"《中华人民共和国消费者权益保护法》第24条第一款规定，经营者提供的商品或者服务不符合质量要求的，消费者可以依照国家规定、当事人约定退货，或者要求经营者履行更换、修理等义务。没有国家规定和当事人约定的，消费者可以自收到商品之日起七日内退货；七日后符合法定解除合同条件的，消费者可以及时退货，不符合法定解除合同条件的，可以要求经营者履行更换、修理等义务。<br>\n" +
	"\n" +
	"二、建议<br>\n" +
	"1. 您可以拨打12315向消费者协会投诉此情况，交由消费者协会对您所反映的情况进行调查、调解；<br>\n" +
	"2. 您可以选择通过网络向消费者协会投诉此情况，如果您想了解具体的投诉方法与流程，可以通过该网址了解相关信息：http://m.cca.cn/tsdh/lc.html；<br>\n" +
	"3. 您可以选择向工商行政管理部门进行举报，交由其处理。<br>\n" +
	"此外，建议您在维权的过程中妥善保存好购买票据等相关凭证。\n" +
	"\n"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";






var pre63="一·案情分析 按照您的描述，您在商品／服务，在使用过程中提出退款，实际退款延迟，涉嫌欺骗消费者，根据相关法律法规，您有权要该公司立即退款。  <br>" +
	" <br>" +
	"二。相关法律法规  <br>" +
	"《中华人民共和国合同法》第六十条  <br>" +
	"当事人应当按照约定全面履行自己的义务。当事人应当遵循诚实信用原则，根据合同的性质、目的和交易习惯履行通知、协助、保密等义务  <br>" +
	"《中华人民共和国消费者权益保护法》第二十条经营者向消费者提供有关商品或者服务的质量、性能、用途、有效期限等信息，应当真实、全面，不得作虚假或者引人误解的宣传。  <br>" +
	"《中华人民共和国消费者权益保护法》第二十三条第二款经营者以广告、产品说明、实物样品或者其他方式表明商品或者服务的质量状况的，应当保证其提供的商品或者服务的实际质量与表明的质量状况相符。  <br>" +
	"《中华人民共和国消费者权益保护法》第三十九条 消费者和经营者发生消费者权益争议的，可以通过下列途径解决： <br>" +
	"(一)与经营者协商和解； <br>" +
	"(二)请求消费者协会或者依法成立的其他调解组织调解； <br>" +
	"(三)向有关行政部门投诉； <br>" +
	"(四)根据与经营者达成的仲裁协议提请仲裁机构仲裁； <br>" +
	"(五)向人民法院提起诉讼。 <br>" +
	"三·鉴于您的诉求和目前的情况，建议您先尝试与该公司进行协商，若无果，可以采取向消费者协会投诉的方式维权。 建议您取得以下证据，以供维权： 1·购买产品时的电子凭据 2该公司关于七天退款的承诺 3.退款进程的截图证明4.证明该公司违反诚信原则的其他证明 <br>"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var pre64="《中华人民共和国消费者权益保护法》第二十三条第二款经营者以广告、产品说明、实物样品或者其他方式表明商品或者服务的质量状况的，应当保证其提供的商品或者服务的实际质量与表明的质量状况相符。 <br>" +
	"建议 <br>" +
	"1. 您可以拨打12315向消费者协会投诉此情况，交由消费者协会对您所反映的情况进行调查、调解； <br>" +
	"2. 您可以选择通过网络向消费者协会投诉此情况，如果您想了解具体的投诉方法与流程，可以通过该网址了解相关信息：http://m.cca.cn/tsdh/lc.html； <br>" +
	"3. 您可以选择向工商行政管理部门进行举报，交由其处理。 <br>" +
	"此外，建议您在维权的过程中妥善保存好购买票据等相关凭证。 <br>"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";




var pre7="一.\t法条依据 <br>" +
	"根据《中华人民共和国刑法》第一百九十二条规定，【集资诈骗罪】以非法占有为目的，使用诈骗方法非法集资，数额较大的，处五年以下有期徒刑或者拘役，并处二万元以上二十万元以下罚金；数额巨大或者有其他严重情节的，处五年以上十年以下有期徒刑，并处五万元以上五十万元以下罚金；数额特别巨大或者有其他特别严重情节的，处十年以上有期徒刑或者无期徒刑，并处五万元以上五十万元以下罚金或者没收财产。 <br>" +
	" <br>" +
	"二.\t建议 <br>" +
	"由于此案件涉及的金额较大，建议您及时向当地公安局报案。鉴于有很多与您有相似遭遇的受害者，建议您尽可能地与他们取得联系，共同收集该公司诈骗的证据并共同与当地公安局取得联系。就目前而言，建议您尽可能多地保留可以证明该公司诈骗了您的财产的证据，例如您向该公司投资的转账证明等，若您与该公司曾签订过理财合同，该合同也可以成为报案证据之一。 <br>" +
	"在您等候公安局立案的同时，您也可以选择先通过以下几种途径维护您的合法权益： <br>" +
	"1. 您可以拨打12315向消费者协会投诉此情况，交由消费者协会对您所反映的情况进行调查、调解，或者拨打市长热线12345反映相关情况； <br>" +
	"2. 您可以选择通过网络向消费者协会投诉此情况，如果您想了解具体的投诉方法与流程，可以通过该网址了解相关信息：http://m.cca.cn/tsdh/lc.html； <br>" +
	"3. 您可以选择向工商行政管理部门进行举报，交由其处理； <br>" +
	"4. 若情形严重，您可以选择与其他受害者一同向人民法院提起诉讼。 <br>"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";



var pre8="<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=81,appendText()' >8.1拒绝开发票</a><br>"+
	"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=82,appendText()' >8.2 开发票金额过小</a><br>"+
	"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=83,appendText()' >8.3开发票不规范</a><br>";

var pre81="案例五：发票问题 <br>" +
	"一、案情分析 <br>" +
	"根据您的描述，您在交易中，索要发票多次，未得到有效回应。该行为侵犯了您的权利，您应该依法维权。 <br>" +
	"二、相关法律法规 <br>" +
	"《中华人民共和国发票管理办法》第三十五条 第一款 <br>" +
	"第三十五条 违反本办法的规定，有下列情形之一的，由税务机关责令改正，可以处1万元以下的罚款；有违法所得的予以没收： <br>" +
	"（一）应当开具而未开具发票，或者未按照规定的时限、顺序、栏目，全部联次一次性开具发票，或者未加盖发票专用章的； <br>" +
	"三、相关建议 <br>" +
	"建议您向对方所在地的税务部门投诉，依法维权 <br>" +
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";


var pre82="一、案情分析 <br>" +
	"根据您的描述，您在交易中，对方出具发票金额不正确。该行为侵犯了您的权利，您应该依法维权。 <br>" +
	"二、相关法律法规 <br>" +
	"《中华人民共和国发票管理办法》第三十五条 第一款 <br>" +
	"第三十五条 违反本办法的规定，有下列情形之一的，由税务机关责令改正，可以处1万元以下的罚款；有违法所得的予以没收： <br>" +
	"（一）应当开具而未开具发票，或者未按照规定的时限、顺序、栏目，全部联次一次性开具发票，或者未加盖发票专用章的； <br>" +
	"三、相关建议 <br>" +
	"建议您向对方所在地的税务部门投诉，依法维权 <br>"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";


var pre83="一、案情分析 <br>" +
	"根据您的描述，您在交易中，对方出具发票不规范。该行为侵犯了您的权利，您应该依法维权。 <br>" +
	"二、相关法律法规 <br>" +
	"《中华人民共和国发票管理办法》第三十五条 第一款 <br>" +
	"第三十五条 违反本办法的规定，有下列情形之一的，由税务机关责令改正，可以处1万元以下的罚款；有违法所得的予以没收： <br>" +
	"（一）应当开具而未开具发票，或者未按照规定的时限、顺序、栏目，全部联次一次性开具发票，或者未加盖发票专用章的； <br>" +
	"三、相关建议 <br>" +
	"建议您向对方所在地的税务部门投诉，依法维权 <br>"+
	"&nbsp&nbsp<br>是否解决您的问题？<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=99,appendText()' >是</a>&nbsp&nbsp&nbsp   "
	+"<a href='javascript:void(0)' class='res-link' target='_self' onclick='flagg_=98,appendText()' >否</a>";

var rep="感谢您的使用！";
var pre98 = "很遗憾，自动恢复系统未能解决您的问题，请登录<a href='https://koubei.baidu.com/m2' target='_self' >网站</a>手动投诉。"
function appendText()
{
 	switch(flagg_)
 	{
 		case 1:mainCon.receiveMessage(pre1,saveChannel);break;
 		case 2:mainCon.receiveMessage(pre2,saveChannel);break;
 		case 3:mainCon.receiveMessage(pre3,saveChannel);break;
		case 5:mainCon.receiveMessage(pre5,saveChannel);break;
		case 6:mainCon.receiveMessage(pre6,saveChannel);break;
		case 61:mainCon.receiveMessage(pre61,saveChannel);break;
 		case 11:mainCon.receiveMessage(pre11,saveChannel);break;
 		case 12:mainCon.receiveMessage(pre12,saveChannel);break;
 		case 13:mainCon.receiveMessage(pre13,saveChannel);break;
		case 4:mainCon.receiveMessage(pre4,saveChannel);break;
		case 41:mainCon.receiveMessage(pre41,saveChannel);break;
		case 42:mainCon.receiveMessage(pre42,saveChannel);break;
		case 51:mainCon.receiveMessage(pre51,saveChannel);break;
		case 52:mainCon.receiveMessage(pre52,saveChannel);break;
		case 62:mainCon.receiveMessage(pre62,saveChannel);break;
		case 63:mainCon.receiveMessage(pre63,saveChannel);break;
		case 64:mainCon.receiveMessage(pre64,saveChannel);break;
		case 7:mainCon.receiveMessage(pre7,saveChannel);break;
		case 8:mainCon.receiveMessage(pre8,saveChannel);break;
		case 82:mainCon.receiveMessage(pre83,saveChannel);break;
		case 83:mainCon.receiveMessage(pre82,saveChannel);break;
		case 81:mainCon.receiveMessage(pre81,saveChannel);break;
		case 64:mainCon.receiveMessage(pre64,saveChannel);break;
		case 91:mainCon.receiveMessage(compensation,saveChannel);break;
		case 99:mainCon.receiveMessage(rep,saveChannel);break;
		case 98:mainCon.receiveMessage(pre98,saveChannel);break;
 	}
  }
