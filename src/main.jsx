import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Menu, X, CheckCircle2, Package, Globe2,
  Palette, Megaphone, Cable, Boxes, ChevronDown, Mail, Phone,
  MapPin, Sparkles, ShieldCheck, Zap, Search
} from 'lucide-react';
import './styles.css';

const services = [
  {icon: Package, title:'Print & Packaging', text:'Professional printing and custom packaging for businesses that want to look the part.', items:['Business cards','Product boxes','Mailer boxes','Labels & stickers','Paper & kraft bags','Menus, flyers & brochures']},
  {icon: Globe2, title:'Websites & Digital', text:'Modern digital experiences designed to turn attention into enquiries and customers.', items:['Website development','Landing pages','E-commerce','SEO foundations','Website maintenance','Digital strategy']},
  {icon: Palette, title:'Branding', text:'Build a consistent visual identity customers recognise and remember.', items:['Logo design','Brand identity','Stationery','Packaging design','Brand guidelines','Marketing materials']},
  {icon: Megaphone, title:'Digital Marketing', text:'Practical campaigns and content that put your business in front of the right people.', items:['Social media','Content creation','Paid advertising','SEO','Campaign strategy','Analytics']},
  {icon: Cable, title:'Cable Solutions', text:'B2B cable and connectivity products for installers, businesses and technical requirements.', items:['Cat5','Cat6','CCTV 3+1','RG59 & RG6','4-core & multi-strand','Coaxial cable']},
  {icon: Boxes, title:'Business Supplies', text:'Source the products your business needs with a straightforward B2B approach.', items:['Promotional materials','Printed stationery','Packaging supplies','Business essentials','Custom products','Bespoke sourcing']}
];

const products = [
  ['Business Cards','Printing'],['Custom Product Boxes','Packaging'],['Mailer Boxes','Packaging'],
  ['Kraft Carry Bags','Bags'],['Labels & Stickers','Labels & Stickers'],['Flyers & Brochures','Printing'],
  ['Cat5 Cable','Cable & Connectivity','Cat5'],['Cat6 Cable','Cable & Connectivity','Cat6'],
  ['CCTV 3+1 Cable','Cable & Connectivity','3+1 CCTV'],['RG59 Cable','Cable & Connectivity','RG59'],
  ['RG6 Cable','Cable & Connectivity','RG6'],['4 Core Cable','Cable & Connectivity','4 Core'],
  ['Multi-Strand Cable','Cable & Connectivity','Multi-Strand'],['RJ59 Cable','Cable & Connectivity','RJ59'],
  ['RJ6 Cable','Cable & Connectivity','RJ6'],['Promotional Materials','Marketing Materials']
];

const cableImages = {
  cat5: {src:'/cables/cat5.jpg', alt:'Cat5 Ethernet cable with an RJ45 connector', source:'Cat5 cable top view', author:'Elijah K Jewell', license:'CC BY-SA 4.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/', sourceUrl:'https://commons.wikimedia.org/wiki/File:Cat5_cable_top_view.jpg'},
  cat6: {src:'/cables/cat6.jpg', alt:'Opened Cat6 cable showing twisted wire pairs', source:'CAT6 twisted pair', author:'Agott', license:'CC BY-SA 3.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/', sourceUrl:'https://commons.wikimedia.org/wiki/File:CAT6_twisted_pair.JPG'},
  coaxCut: {src:'/cables/coax-cut.jpg', alt:'Cutaway view showing the layers of coaxial cable', source:'Coaxial cable cut', author:'FDominec', license:'CC BY-SA 3.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/', sourceUrl:'https://commons.wikimedia.org/wiki/File:Coaxial_cable_cut.jpg'},
  coaxBlue: {src:'/cables/coax-blue.jpg', alt:'Blue Canare coaxial cable coil', source:'Canare coaxial cable L-5CFB, blue', author:'Ohgud.kibn7ewyu2', license:'CC BY-SA 4.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0', sourceUrl:'https://commons.wikimedia.org/wiki/File:Canare,_Coaxial_cable,_L-5CFB,_Blue.jpg'},
  multicore: {src:'/cables/multicore.jpg', alt:'Diagram showing the structure of a four-core cable', source:'Multicore cable diagram', author:'Open Electrical', license:'CC BY-SA 3.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0', sourceUrl:'https://commons.wikimedia.org/wiki/File:Multicore_cable_diagram.jpg', diagram:true},
  braided: {src:'/cables/braided-coax.jpg', alt:'Exposed braided shield inside a coaxial cable', source:'Coaxial cable braided wire', author:'Wtshymanski', license:'CC BY-SA 4.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0', sourceUrl:'https://commons.wikimedia.org/wiki/File:Coaxial_cable_braided_wire.jpg'}
};

const cables = [
  {name:'Cat5', image:cableImages.cat5},
  {name:'Cat6', image:cableImages.cat6},
  {name:'3+1 CCTV', image:cableImages.coaxCut},
  {name:'RG59', image:cableImages.coaxCut},
  {name:'RG6', image:cableImages.coaxBlue},
  {name:'4 Core', image:cableImages.multicore},
  {name:'Multi-Strand', image:cableImages.braided},
  {name:'RJ59', image:cableImages.coaxCut},
  {name:'RJ6', image:cableImages.coaxBlue}
];

function CableImage({image, name}){
  return <img className={`cable-photo${image.diagram?' cable-diagram':''}`} src={image.src} alt={image.alt} loading="lazy" decoding="async" title={`${name} cable — illustrative reference image`}/>;
}

function ImageCredits(){
  return <details className="image-credits"><summary>Cable image credits and licences</summary><ul>{Object.values(cableImages).map(image=><li key={image.src}><a href={image.sourceUrl} target="_blank" rel="noreferrer">{image.source}</a> — {image.author} — <a href={image.licenseUrl} target="_blank" rel="noreferrer">{image.license}</a></li>)}</ul></details>;
}

function ScrollTop(){
  const {pathname} = useLocation();
  useEffect(()=>{window.scrollTo(0,0)},[pathname]);
  return null;
}

function Navbar(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About Us','/about'],['Services','/services'],['Print & Packaging','/printing'],['Digital Solutions','/digital'],['Cable Solutions','/cables'],['Products','/products'],['Contact','/contact']];
  return <header className="nav-wrap">
    <nav className="nav container">
      <Link to="/" className="brand" onClick={()=>setOpen(false)}><img className="brand-mark" src="/brand-mark.jpeg" alt="Next Wave Digital logo"/><div>NEXT WAVE DIGITAL<small>BUILD • BRAND • PRINT • MARKET • SUPPLY</small></div></Link>
      <div id="primary-navigation" className={`nav-links ${open?'open':''}`}>
        {links.map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)}>{label}</Link>)}
        <Link className="nav-cta" to="/contact" onClick={()=>setOpen(false)}>Get a Quote <ArrowUpRight size={16}/></Link>
      </div>
      <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="primary-navigation">{open?<X/>:<Menu/>}</button>
    </nav>
  </header>
}

function Button({to='/',children,secondary=false}){return <Link className={`btn ${secondary?'btn-secondary':''}`} to={to}>{children}<ArrowRight size={17}/></Link>}

function Hero(){
  const trustPoints = ['Bespoke solutions','UK business support','Practical sourcing'];
  const {pathname} = useLocation();
  const stackItems = [
    {icon: Package, label:'Print & Packaging', text:'Professional business-ready collateral', to:'/printing'},
    {icon: Globe2, label:'Digital Presence', text:'Launch a sharper online offer', to:'/digital'},
    {icon: Megaphone, label:'Marketing', text:'Turn attention into enquiries', to:'/services'},
    {icon: Cable, label:'Business Supply', text:'Source products without the hassle', to:'/products'}
  ];
  return <section className="hero">
    <div className="hero-grid"></div>
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15}/> B2B BUSINESS SOLUTIONS • UK</div>
        <h1>Your business,<br/><em>built for growth.</em></h1>
        <p>Next Wave Digital helps businesses with print, packaging, websites, branding, digital marketing and connectivity solutions that work in the real world.</p>
        <div className="hero-actions"><Button to="/contact">Get a Quote</Button><Button to="/services" secondary>Explore Services</Button></div>
        <div className="hero-badges">{['Print & packaging','Web design','Brand identity','Digital marketing','Business supply'].map(item=><span key={item} className="hero-badge">{item}</span>)}</div>
        <div className="trust-row">{trustPoints.map(item=><span key={item}><CheckCircle2/>{item}</span>)}</div>
      </div>
      <div className="hero-art">
        <div className="orb orb1"></div><div className="orb orb2"></div>
        <div className="dashboard-card">
          <div className="dash-top"><span>YOUR BUSINESS STACK</span><span className="live-dot">● LIVE</span></div>
          {stackItems.map(({icon:Icon,label,text,to})=><Link key={label} className={`stack-row ${pathname===to?'active':''}`} to={to}><Icon/><div><b>{label}</b><small>{text}</small></div><ArrowUpRight/></Link>)}
          <div className="dash-footer"><span>Next Wave Digital</span><strong>01—06</strong></div>
        </div>
      </div>
    </div>
  </section>
}

function ValueStrip(){return <div className="value-strip"><div className="container value-grid">{['B2B solutions','UK focused','Custom requirements','Competitive pricing','Long-term support'].map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div>}

function BusinessHighlights(){
  const highlights=[
    {title:'Print that feels premium', text:'From business cards to packaging and branded stationery, we turn the details into a sharper customer experience.', stat:'Printed assets'},
    {title:'Digital systems that sell', text:'Websites, brand direction and marketing support built to help your offer stand out online.', stat:'Online presence'},
    {title:'A single B2B partner', text:'One contact for sourcing, creative execution and practical supply support across multiple requirements.', stat:'Business support'}
  ];
  return <section className="section highlight-section"><div className="container"><SectionHead kicker="HOW WE HELP" title="A smarter way to cover your next project." text="From print-ready collateral to digital growth and sourcing support, we bring the building blocks together."/><div className="highlight-grid">{highlights.map(item=><article className="highlight-card" key={item.title}><div className="stat-pill">{item.stat}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
}

function SectionHead({kicker,title,text,center=false}){return <div className={`section-head ${center?'center':''}`}><div className="eyebrow">{kicker}</div><h2>{title}</h2>{text&&<p>{text}</p>}</div>}

function ServicesPreview(){
  return <section className="section"><div className="container">
    <SectionHead kicker="WHAT WE DO" title="Everything your business needs to move forward." text="Bring your physical brand, digital presence and business supply needs together with one partner."/>
    <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}>
      <div className="icon-box"><s.icon/></div><span className="service-num">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p>
      <ul>{s.items.slice(0,4).map(x=><li key={x}><CheckCircle2 size={14}/>{x}</li>)}</ul>
      <Link to={i===0?'/printing':i===1?'/digital':i===4?'/cables':'/services'}>Explore <ArrowUpRight size={16}/></Link>
    </article>)}</div>
  </div></section>
}

function WhyUs(){
  const why=[['One business partner','Multiple solutions under one roof.'],['Custom solutions','Built around your actual requirement.'],['Quality focus','Professional outputs from concept to delivery.'],['Competitive approach','Practical B2B sourcing and pricing.'],['UK business focus','Solutions designed for UK businesses.'],['Long-term partnerships','Built to support your next stage of growth.']];
  return <section className="dark-section"><div className="container why-wrap"><div><SectionHead kicker="WHY NEXT WAVE" title="Less juggling. More getting things done." text="Next Wave Digital connects creative, digital and physical business needs so you can spend more time running the business."/><Button to="/about">Why work with us</Button></div><div className="why-grid">{why.map((x,i)=><div className="why-card" key={x[0]}><span>0{i+1}</span><ShieldCheck size={21}/><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></div></section>
}

function Process(){
 return <section className="section process"><div className="container"><SectionHead kicker="HOW IT WORKS" title="Simple from first message to final delivery." center/><div className="process-grid">{[['01','Tell us what you need','Share your requirement, product or project with our team.'],['02','We build the solution','We design, source or develop the right route forward.'],['03','Review & approve','Review your quotation, design or proposal before production.'],['04','We deliver','Your finished product or service is ready to move your business forward.']].map(x=><div key={x[0]} className="process-card"><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
}

function CTA(){return <section className="cta-section"><div className="container cta"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Need a solution that fits?<br/><em>Let’s talk.</em></h2><p>Share your requirement and we’ll help shape the right approach, quote and next steps.</p></div><Button to="/contact">Start a conversation</Button></div></section>}

function Home(){return <><Hero/><ValueStrip/><BusinessHighlights/><ServicesPreview/><WhyUs/><Process/><CTA/></>}

function PageHero({kicker,title,text}){return <section className="page-hero"><div className="container"><div className="eyebrow">{kicker}</div><h1>{title}</h1><p>{text}</p></div></section>}

function About(){
 return <><PageHero kicker="ABOUT NEXT WAVE DIGITAL" title="One partner. Multiple business solutions." text="We help businesses bring together branding, print, digital presence and supply needs in one straightforward process."/>
 <section className="section"><div className="container split"><div><SectionHead kicker="OUR APPROACH" title="Built around what your business actually needs." text="Next Wave Digital makes it easier to source, build and market the things your business needs to grow."/><p className="body-copy">Whether it’s a first batch of business cards, custom packaging, a new website or a wider product sourcing requirement, we keep the process simple, practical and professional from start to finish.</p><div className="check-list">{['Business-focused solutions','Custom requirements','Professional service','Reliable sourcing','Long-term partnerships'].map(x=><div key={x}><CheckCircle2/>{x}</div>)}</div></div><div className="about-panel"><img className="about-logo" src="/brand-logo.jpeg" alt="Next Wave Digital logo: Ride the Next Wave of Growth with AI"/><div><span>OUR PROMISE</span><h3>Build. Brand.<br/>Print. Market.<br/>Supply.</h3></div></div></div></section><WhyUs/><CTA/></>
}

function Services(){
 return <><PageHero kicker="OUR SERVICES" title="Everything your business needs to move forward." text="A connected set of B2B services covering print, packaging, digital, branding, marketing and technical supply."/><section className="section"><div className="container service-list">{services.map((s,i)=><article className="service-detail" key={s.title}><div className="detail-icon"><s.icon/></div><div><span className="service-num">0{i+1}</span><h2>{s.title}</h2><p>{s.text}</p><div className="pill-row">{s.items.map(x=><span key={x}>{x}</span>)}</div></div><ArrowUpRight className="detail-arrow"/></article>)}</div></section><CTA/></>
}

function Printing(){return <><PageHero kicker="PRINT & PACKAGING" title="Print that represents your business." text="Custom printing and packaging solutions designed to help your business look polished, professional and memorable at every touchpoint."/><section className="section"><div className="container category-grid">{[['Business Printing',['Business cards','Flyers','Brochures','Menus','Posters','Stationery']],['Product Packaging',['Product boxes','Mailer boxes','Food packaging','Cake boxes','Custom packaging']],['Bags',['Paper carry bags','Kraft bags','Branded bags']],['Labels & Stickers',['Product labels','Promotional stickers','Custom adhesive materials']],['Promotional Printing',['Banners','Promotional materials','Marketing collateral']]].map(x=><article className="category-card" key={x[0]}><div className="icon-box"><Package/></div><h2>{x[0]}</h2><ul>{x[1].map(y=><li key={y}><CheckCircle2/>{y}</li>)}</ul><Link to="/contact">Request a quote <ArrowRight size={16}/></Link></article>)}</div></section><CTA/></>
}

function Digital(){return <><PageHero kicker="DIGITAL SOLUTIONS" title="Build your digital presence." text="Modern websites, branding and digital marketing that help businesses show up clearly, professionally and with confidence online."/><section className="section"><div className="container digital-grid">{[['Website Development','Modern, responsive websites built around your business goals and customer journey.'],['Branding','Create a recognisable identity that feels consistent across every touchpoint.'],['SEO','Build a stronger search foundation so the right customers can find you.'],['Social Media','Content and campaigns that keep your business visible and relevant.'],['Content Creation','Professional creative assets for your channels, campaigns and sales process.'],['Digital Advertising','Targeted activity designed around measurable business outcomes.']].map((x,i)=><article className="digital-card" key={x[0]}><span>0{i+1}</span><h2>{x[0]}</h2><p>{x[1]}</p><ArrowUpRight/></article>)}</div></section><CTA/></>
}

function Cables(){return <><PageHero kicker="CABLE SOLUTIONS" title="Reliable connectivity starts here." text="B2B cable and connectivity products for installers, businesses and technical requirements — supplied with the right specification in mind."/><section className="section"><div className="container"><div className="notice"><ShieldCheck/><div><b>Specification notice</b><p>Exact technical specifications, pack sizes and pricing are supplied against your requirement. We do not publish unverified specifications.</p></div></div><p className="cable-image-note">Reference photos and diagrams are illustrative; they may not match the exact product, make or specification supplied.</p><div className="cable-grid">{cables.map(({name,image})=><article className="product-card" key={name}><div className="product-visual"><CableImage image={image} name={name}/><span>{name}</span></div><h3>{name} Cable</h3><p>Connectivity products available for B2B requirements. Tell us your specification and we’ll quote the right option.</p><Link to="/contact">Request pricing <ArrowRight size={15}/></Link></article>)}</div><ImageCredits/></div></section><CTA/></>}

function Products(){const [filter,setFilter]=useState('All');const cats=['All','Printing','Packaging','Bags','Labels & Stickers','Cable & Connectivity','Marketing Materials'];const visible=products.filter(p=>filter==='All'||p[1]===filter);return <><PageHero kicker="PRODUCT CATALOGUE" title="Products for your next requirement." text="Browse our core product categories, then get in touch for quantities, specifications and a tailored quotation."/><section className="section"><div className="container"><div className="filters">{cats.map(c=><button className={filter===c?'selected':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div>{filter==='Cable & Connectivity'&&<p className="cable-image-note">Cable reference images are illustrative; they may not match the exact product, make or specification supplied.</p>}<div className="product-grid">{visible.map(([name,cat,cableName])=>{const cable=cables.find(item=>item.name===cableName);return <article className="product-card" key={name}><div className="product-visual">{cable?<CableImage image={cable.image} name={cable.name}/>:<Package/>}<span>{cat}</span></div><h3>{name}</h3><p>Custom supply for your business requirement. We can advise on options, specs and pricing.</p><Link to="/contact">Request a quote <ArrowRight size={15}/></Link></article>})}</div>{(filter==='All'||filter==='Cable & Connectivity')&&<ImageCredits/>}</div></section></>}

function NotFound(){return <><PageHero kicker="404 — PAGE NOT FOUND" title="This page isn’t in our plans." text="The page may have moved, or the link may be incorrect. Let’s get you back on course."/><section className="section"><div className="container"><Button to="/">Back to Home</Button></div></section></>}

function Contact(){
  const details=[
    {
      icon: Mail,
      label:'✉️',
      links:[{text:'nextwavedigital143@gmail.com', href:'mailto:nextwavedigital143@gmail.com'}]
    },
    {
      icon: Phone,
      label:'🇬🇧',
      links:[
        {text:'+44 7783 508727', href:'tel:+447783508727'},
        {text:'WhatsApp message', href:'https://wa.me/447783508727', external:true}
      ]
    },
    {
      icon: Phone,
      label:'🇮🇳',
      links:[
        {text:'+91 99908 88323', href:'tel:+919990888323'},
        {text:'WhatsApp message', href:'https://wa.me/919990888323', external:true}
      ]
    },
    {
      icon: MapPin,
      label:'📍',
      links:[{text:'London, United Kingdom'},{text:'Delhi, India'}]
    }
  ];
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const enquiry = [
      `Name: ${formData.get('name')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Service: ${formData.get('service')}`,
      `Quantity: ${formData.get('quantity') || 'Not provided'}`,
      `Preferred delivery date: ${formData.get('deliveryDate') || 'Not provided'}`,
      '',
      'Requirement:',
      formData.get('requirement')
    ].join('\n');
    const subject = `Quote enquiry: ${formData.get('service')}`;
    window.location.href = `mailto:nextwavedigital143@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiry)}`;
  };
  return <><PageHero kicker="GET IN TOUCH" title="Let's build something that works for your business." text="Tell us what you need. We'll help you work out the next step."/><section className="section"><div className="container contact-grid"><div><SectionHead kicker="START A CONVERSATION" title="Request a quote." text="Use the form and include as much detail as you have. We'll use it to understand your requirement."/><div className="contact-items">{details.map(({icon:Icon,label,links})=><div key={label} className="contact-item"><Icon/><div><b>{label}</b><div className="contact-detail-links">{links.map(({text,href,external})=>href?<a key={text} href={href} target={external?'_blank':undefined} rel={external?'noreferrer':undefined}>{text}</a>:<span key={text}>{text}</span>)}</div></div></div>)}</div></div><form className="quote-form" onSubmit={handleSubmit}><div className="form-row"><label>Full name<input name="name" required placeholder="Your name"/></label><label>Company name<input name="company" placeholder="Your company"/></label></div><div className="form-row"><label>Email<input name="email" type="email" required placeholder="you@company.com"/></label><label>Phone<input name="phone" placeholder="+44..."/></label></div><label>Service required<select name="service"><option>Print & Packaging</option><option>Website Development</option><option>Branding</option><option>Digital Marketing</option><option>Cable Solutions</option><option>Business Supplies</option><option>Other</option></select></label><div className="form-row"><label>Quantity<input name="quantity" placeholder="e.g. 500 units"/></label><label>Preferred delivery date<input name="deliveryDate" type="date"/></label></div><label>Your requirement<textarea name="requirement" required rows="6" placeholder="Tell us about the product, project or service you need..."></textarea></label><button className="btn" type="submit">Send enquiry <ArrowRight size={17}/></button><small className="form-note">Your email app will open with your enquiry details and send them to nextwavedigital143@gmail.com.</small></form></div></section></>
}

function FAQ(){const faqs=[
  {q:'What services does Next Wave Digital provide?',a:'We support print and packaging, websites and digital, branding, digital marketing, cable and connectivity, and business supply sourcing for B2B requirements.'},
  {q:'Do you provide custom printing and packaging?',a:'Yes. We work with businesses on custom printed materials, packaging options, branded stationery, labels, bags and product presentation solutions.'},
  {q:'Do you build websites?',a:'Yes. We create modern, responsive websites and landing pages designed to look professional and convert visitors into enquiries.'},
  {q:'Do you provide digital marketing?',a:'Yes. We can help with content, campaign planning, social media support, SEO foundations and digital strategy for business growth.'},
  {q:'Can businesses request custom products?',a:'Absolutely. We can source and support bespoke or specification-led products, especially where a standard off-the-shelf option does not fit the requirement.'},
  {q:'Do you supply cables?',a:'Yes. We supply cable and connectivity products for business and technical requirements, including connectivity and specification-led sourcing.'},
  {q:'How can I request a quotation?',a:'Send us your requirement through the contact form or by email, and we’ll advise on the best options, quantities, specifications and pricing.'}
];const [open,setOpen]=useState(null);return <section className="section faq"><div className="container narrow"><SectionHead kicker="FAQ" title="Straight answers for common questions." center/>{faqs.map(({q,a},i)=><div className="faq-item" key={q}><button aria-expanded={open===i} aria-controls={`faq-answer-${i}`} onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><ChevronDown className={open===i?'rot':''}/></button><p id={`faq-answer-${i}`} hidden={open!==i}>{a}</p></div>)}</div></section>}

function Footer(){return <><FAQ/><footer><div className="container footer-grid"><div><Link to="/" className="brand footer-brand"><img className="brand-mark" src="/brand-mark.jpeg" alt="Next Wave Digital logo"/><div>NEXT WAVE DIGITAL<small>BUILD • BRAND • PRINT • MARKET • SUPPLY</small></div></Link><p>Practical B2B solutions across printing, packaging, digital, marketing and connectivity.</p></div><div><h4>Company</h4><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link></div><div><h4>Services</h4><Link to="/printing">Print & Packaging</Link><Link to="/digital">Websites & Digital</Link><Link to="/digital">Branding</Link><Link to="/digital">Digital Marketing</Link><Link to="/cables">Cable Solutions</Link></div><div><h4>Get Started</h4><p>Have a requirement? Let's talk.</p><Button to="/contact">Request a Quote</Button></div></div><div className="container footer-bottom"><span>© 2026 Next Wave Digital. All rights reserved.</span><span>nxtwavedigi.com</span></div></footer></>}

function App(){return <><ScrollTop/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/printing" element={<Printing/>}/><Route path="/digital" element={<Digital/>}/><Route path="/cables" element={<Cables/>}/><Route path="/products" element={<Products/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
