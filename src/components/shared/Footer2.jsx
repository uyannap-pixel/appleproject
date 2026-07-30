import "./Footer2.css"
export default function Footer2 () {

    const footerList = [
        {
            section: [
                {
                    title: "Shop and Learn",
                    links: [
                        "Store",
                        "Mac",
                        "iPad",
                        "iPhone",
                        "Watch",
                        "Vision",
                        "Airpod",
                        "Tv & Home",
                        "Airtags",
                        "Accessories",
                        "Gift Card"
                    ]
                },
                {
                    title: "Apple Wallet",

                    links: [
                        "Wallet",
                        "Apple Card",
                        "Apple pay",
                        "Apple Cash"
                    ]
                },

            ]
        },
        {
            section: [
                {
                   title: "Account",
                    links: [
                        "Manage Your Apple Account",
                        "Apple Store Account ",
                        "iCloud.com"
                    ]
                },
                {
                    title: "Entertainment",
                    links: [
                        "Apple One",
                        "Apple Tv",
                        "Apple Music",
                        "Apple Arcade",
                        "Apple Fitness+",
                        "Apple News+",
                        "Apple Podcast",
                        "Apple Book",
                        "Apple Store",
                    ]
                }
            ]
        },
        {
            section: [
                {
                    title: "Apple Store",
                    links: [
                        "Find A Store",
                        "Ginus Bar",
                        "Today at Apple",
                        "Group Reservations",
                        "Apple Camp",
                        "Apple Store App",
                        "Certified Refurblished",
                        "Apple Trade in",
                        "Finacing",
                        "Carrier Deals at Apple",
                        "Order status",
                        "Shopping Help",
                    ]
                }
            ]
        },
        {
            section: [
                {
                    title: "For Business",
                    links: [
                        "Apple And Business",
                        "Shop for Business"
                    ]
                },
                {
                    title: "For Education",
                    links: [
                        "Apple And Education",
                        "Shop for K-12",
                        "Shop for College"
                    ]
                },
                {
                    title: "For Healthcare",

                    links: [
                        "Apple and Healthcare"
                    ]
                },
                {
                    title: "For Goverment",

                    links: [
                        "Apple and Goverment",
                        "Shop for veterans and military",
                        "Shop for State and Local Employees",
                        "Shop for Fedral Employees"
                    ]
                }
            ]
        },

        {
            section: [
                {
                    title: "Apple Values",
                    links: [
                        "Accessibilty",
                        "Education",
                        "Envioment",
                        "Privacy",
                        "Inclusion and Divesity",
                        "Racial Equity And Justice",
                        "Supply Chain innovation"
                    ]
                },
                {
                    title: "About Apple",
                    links: [
                        "Newsroom",
                        "APple Leadership",
                        "career Opputunities",
                        "Investors",
                        "Ethics & Compliance",
                        "Events",
                        "contact Apple" 
                    ]
                }
            ]
        }
    ]
    return(
        <div>
            <div className="footer-2">
                    {footerList.map((list, listIndex)=>(
                        <div className="footer-column" key={listIndex}>
                            {list.section.map((section, sectionIndex) => (
                                <div className="footer1-section" key={sectionIndex}>
                                    <h1>{section.title}</h1>
                                    <ul>
                                        {section.links.map((link, i)=> (
                                            <li key={i}>
                                                <a href="#">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
            <div className="wee">
                <p>
                    More ways to shop:<a href="#">Find an Apple</a>Store or <a href="#">other retailer </a>near you. Or call <a href="#">1-800-MY-APPLE</a> (1-800-692-7753).
                </p>
            </div>
        </div>
    )
}