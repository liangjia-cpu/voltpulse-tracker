/**
 * VoltPulse Dashboard Database
 * Holds the latest aggregated wireless charging news, rumors, tests, and metrics.
 * This file is automatically updated by the VoltPulse Data Collector GitHub Action.
 */

window.chargingData = {
    "lastUpdated": "May 29, 2026 06:00:00",
    "metrics": {
        "maxSpeed": "50W",
        "rumorCount": 6,
        "avgThermal": "38.4\u00b0C"
    },
    "chartData": [
        {
            "label": "Pixel Snap",
            "value": 25,
            "type": "news",
            "source": "Android Authority"
        },
        {
            "label": "Qi2 Standard Baseline",
            "value": 15,
            "type": "news",
            "source": "WPC Official Announcement"
        },
        {
            "label": "MagSafe 2026 (Gen 3)",
            "value": 25,
            "type": "rumor",
            "source": "DigiTimes Leaks"
        },
        {
            "label": "Xiaomi HyperCharge Wireless",
            "value": 50,
            "type": "testing",
            "source": "ChargerLAB Analysis"
        },
        {
            "label": "Samsung SuperFast Qi2+",
            "value": 25,
            "type": "rumor",
            "source": "ETNews Korea"
        }
    ],
    "feedItems": [
        {
            "id": "fc-386",
            "type": "news",
            "date": "2026-05-29",
            "title": "Samsung Introduces Galaxy SmartRing with Integrated Low-Wattage Resonant Charging",
            "preview": "Samsung Electronics officially unveiled its Gen 2 SmartRing today, featuring highly efficient sub-1W ambient resonance charging to sustain battery life indefinitely.",
            "fullText": "Samsung Electronics officially unveiled its Gen 2 SmartRing today, featuring highly efficient sub-1W ambient resonance charging to sustain battery life indefinitely. Following widespread internal hardware testing and early-stage factory validation, this development is expected to hit consumer markets in upcoming cycles. Multiple supply chain partners have corroborated these telemetry details.",
            "source": "Samsung Newsroom",
            "url": "#",
            "metrics": {
                "Standard": "Ambient Resonant",
                "Power": "<1W"
            }
        },
        {
            "id": "fc-101",
            "type": "news",
            "date": "2026-05-29",
            "title": "Wireless Power Consortium (WPC) Unveils Qi2.1 Standard with 25W Baseline",
            "preview": "The WPC officially announced the incremental Qi2.1 update today. Featuring enhanced Magnetic Power Profile alignments, the standard increases baseline speeds for certified devices from 15W to 25W safely.",
            "fullText": "The Wireless Power Consortium (WPC) officially ratified the Qi2.1 specification today, setting a new baseline for smart device charging ecosystem. Following comprehensive thermal and magnetic alignment research, the new 25W Magnetic Power Profile (MPP) ensures faster speeds while enforcing safe peak temperature thresholds. Adoption by major flagship manufacturers is anticipated by Q4.",
            "source": "WPC Official Announcement",
            "url": "https://www.wirelesspowerconsortium.com",
            "metrics": {
                "Speed": "25W",
                "Standard": "Qi2.1"
            }
        },
        {
            "id": "fc-102",
            "type": "rumor",
            "date": "2026-05-28",
            "title": "Apple's 'MagSafe 3' Rumored to Support Distance Charging up to 10cm",
            "preview": "Supply chain leaks from Taiwan suggest Apple's upcoming ecosystem includes an upgraded transmitter capable of delivering up to 5W of power across short air gaps, ideal for AirPods and Apple Watch.",
            "fullText": "According to supply chain informants reporting to DigiTimes, Apple is actively testing an upgraded 'MagSafe 3' protocol for their next generation hardware. The breakthrough feature relies on highly focused resonant coupling, enabling low-wattage (5W) charging across distances up to 10cm. This is intended to seamlessly trickle-charge peripherals like the Apple Watch Ultra and AirPods Pro without direct surface contact.",
            "source": "DigiTimes / Leaker ' yeux1122 '",
            "url": "https://www.digitimes.com",
            "metrics": {
                "Range": "10cm",
                "Peripherals": "5W"
            }
        },
        {
            "id": "fc-103",
            "type": "testing",
            "date": "2026-05-27",
            "title": "Thermal Testing: Xiaomi's 50W HyperCharge Maintains Safer Thermals Than Competitors",
            "preview": "Independent laboratory testing showed Xiaomi's active cryo-cooling pad kept peak battery temperatures under 39\u00b0C while continuously pumping 50W of wireless power.",
            "fullText": "Comprehensive thermal stress-testing of Xiaomi's newly released 50W HyperCharge Wireless Pad revealed remarkable thermal management. Using an integrated semiconductor cooling block and micro-fan, the unit maintained surface and battery temperatures at a stable 38.4\u00b0C throughout a 0-100% charging cycle on the Xiaomi 16 Ultra. This beats comparable 25W solutions which peaked near 42\u00b0C.",
            "source": "ChargerLAB Analysis",
            "url": "https://www.chargerlab.com",
            "metrics": {
                "Peak Temp": "38.4\u00b0C",
                "Speed": "50W",
                "Efficiency": "88%"
            }
        },
        {
            "id": "fc-104",
            "type": "rumor",
            "date": "2026-05-25",
            "title": "Pixel 11 Pro Leak Points to Qi2 MagSafe-style Ring and 30W Speeds",
            "preview": "CAD renders of the upcoming Pixel 11 Pro showcase an altered coil architecture compatible with magnetic ring accessories, bumping charging speeds by 30%.",
            "fullText": "Alleged CAD renders and engineering validation test (EVT) sheets obtained by Android Authority suggest Google is fully adopting the Magnetic Power Profile for the Pixel 11 lineup. The data details a highly dense 38-magnet array embedded in the phone's back panel. Additional power management IC details reveal support for speeds reaching up to 30W on proprietary stands.",
            "source": "Android Authority Leaks",
            "url": "https://www.androidauthority.com",
            "metrics": {
                "Speed": "30W",
                "Standard": "Qi2 MPP"
            }
        },
        {
            "id": "fc-105",
            "type": "news",
            "date": "2026-05-24",
            "title": "Anker Releases Ultra-Thin MagGo Qi2 Power Bank with Smart LCD",
            "preview": "Anker's newest 10,000mAh portable charger features a sleek aluminum design, Qi2 speeds, and an OLED displaying discharge rate, remaining time, and temperature.",
            "fullText": "Anker expands its award-winning MagGo lineup with the 'MagGo Slim Ultra'. Utilizing advanced stacked battery cells, the bank measures just 12mm in thickness while providing a full 10,000mAh capacity. Most notably, an integrated micro-OLED panel gives users real-time telemetry into charging speeds, safe thermal state, and time-to-full metrics.",
            "source": "Anker Press Release",
            "url": "https://www.anker.com",
            "metrics": {
                "Capacity": "10,000mAh",
                "Thickness": "12mm"
            }
        },
        {
            "id": "fc-099",
            "type": "archive",
            "date": "2025-12-15",
            "title": "Qi2 MPP (Magnetic Power Profile) Adoption Rates Surpass 40% in Flagship Market",
            "preview": "End-of-year industry auditing data confirmed that over 40% of all premium smartphones shipped in Q4 included native magnetic ring profile arrays conforming to WPC Qi2 parameters.",
            "fullText": "End-of-year industry auditing data confirmed that over 40% of all premium smartphones shipped in Q4 included native magnetic ring profile arrays conforming to WPC Qi2 parameters.",
            "source": "WPC Strategy Analytics",
            "url": "https://www.wirelesspowerconsortium.com",
            "metrics": {
                "Adoption Rate": "40%",
                "Market": "Flagship"
            }
        },
        {
            "id": "fc-098",
            "type": "archive",
            "date": "2025-11-02",
            "title": "GaN (Gallium Nitride) Charging Blocks Shrink Qi2 Stand Footprints by 30%",
            "preview": "First-generation commercial implementations combining GaN semiconductors with high-frequency resonant coils entered mass supply chains this month.",
            "fullText": "First-generation commercial implementations combining GaN semiconductors with high-frequency resonant coils entered mass supply chains this month.",
            "source": "ETNews Korea",
            "url": "https://www.etnews.com",
            "metrics": {
                "Footprint Reduction": "30%",
                "Tech": "GaN + Resonant"
            }
        }
    ]
};
