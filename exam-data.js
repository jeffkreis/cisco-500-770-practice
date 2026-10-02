const EXAM = {
  "sets": [
    {
      "id": 1,
      "day": "Questions 1–10",
      "title": "Secure Enterprise Routing & SD-WAN",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. You are an Account Executive meeting with the CIO of a distributed retail enterprise with 150 branch locations. The customer is experiencing severe latency with cloud applications (Microsoft 365, Salesforce) because all branch traffic is backhauled over expensive legacy MPLS circuits to a central corporate data center. The CIO wants to reduce MPLS spend and optimize SaaS application performance without sacrificing security. Which Cisco Catalyst SD-WAN capability should you position as the primary architectural solution to address this customer's business outcome?",
          "why": "AE / Commercial Positioning: Cloud OnRamp for SaaS continuously monitors real-time SaaS performance (latency, jitter, loss) via synthetic HTTP/DNS probes across local DIA and regional hub paths. It dynamically selects the optimal exit for Microsoft 365 and Salesforce, cutting MPLS bandwidth consumption by up to 60% while drastically improving user productivity.",
          "kind": "choice",
          "choices": [
            "Upgrading all MPLS circuits to 10 Gbps dedicated circuits.",
            "Deploying dedicated on-premises Microsoft Exchange servers at every retail branch.",
            "Enabling full-tunnel IPsec backhaul over cellular LTE circuits.",
            "Cloud OnRamp for SaaS with Direct Internet Access (DIA) to dynamically probe and route traffic over the lowest-latency local internet breakout."
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. You are an Account Executive presenting an SD-WAN architecture proposal to a regional hospital network. The customer must isolate guest Wi-Fi, biomedical telemetry devices, and electronic health records (EHR) into distinct isolated routing segments across the WAN, while centralizing control policies. Which TWO Cisco Catalyst SD-WAN architectural principles should you emphasize to demonstrate enterprise-grade WAN segmentation? (Choose two)",
          "why": "Architectural Rationale: Service VPNs: Provide end-to-end multi-tenant isolation across the SD-WAN fabric (e.g., Guest VPN, Medical IoT VPN, EHR VPN). Centralized Control Policies: Engineered on vManage and distributed via vSmart OMP peering, allowing centralized control over WAN topologies (hub-and-spoke vs full-mesh) without touching individual branch routers.",
          "kind": "choice",
          "choices": [
            "VPN 512 is used to carry guest Wi-Fi and patient medical records simultaneously.",
            "All traffic must be placed into VPN 0 to enable hardware cryptographic acceleration.",
            "Service VPNs (VPNs 1–511, 513–65535) provide complete multi-tenant Layer 3 VRF isolation across the WAN overlay.",
            "Segmentation is achieved by manually assigning different BGP Autonomous System numbers to every router port.",
            "Centralized Control Policies configured on vManage and enforced by vSmart controllers dictate inter-VPN and topology rules across all edge routers."
          ],
          "answers": [
            2,
            4
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. A financial services customer is executing a multi-cloud migration, moving core workloads into Amazon Cloud and Microsoft Azure. The Lead Cloud Architect wants to automate the provisioning, routing, and IPsec connectivity of virtual routers inside cloud transit architectures with zero manual CLI configuration. Which Cisco Catalyst SD-WAN solution automates the deployment and lifecycle management of virtual routers (Catalyst 8000V) inside public cloud transit environments?",
          "why": "Architectural Value: Cloud OnRamp for Multi-Cloud integrates directly with cloud provider APIs to automatically deploy, configure, and manage virtual Catalyst 8000V instances inside cloud transit hubs, extending enterprise routing, segmentation, and policy enforcement into public cloud workloads.",
          "kind": "choice",
          "choices": [
            "Cisco Webex Control Hub Integrations",
            "Cisco Prime Infrastructure Cloud Module",
            "Manual REST API scripting on individual cloud instances",
            "Cisco Catalyst SD-WAN Cloud OnRamp for Multi-Cloud"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. You are meeting with the CISO of a distributed healthcare organization. The customer requires deep packet inspection (Snort IPS/IDS) and URL filtering directly at 40 remote clinic routers so malicious traffic is blocked locally before entering the corporate network, avoiding the latency of backhauling traffic to headquarters. Which Cisco platform and feature delivers on-box, containerized enterprise threat prevention backed by Cisco Talos intelligence directly on the branch edge?",
          "why": "Security & TCO Impact: The Catalyst 8300/8200 series runs containerized Snort IPS/IDS, URL Filtering, and Advanced Malware Protection (AMP) directly in software containers on the router CPU, powered by real-time Talos threat intelligence, eliminating the cost and complexity of separate branch firewall appliances.",
          "kind": "choice",
          "choices": [
            "Legacy Cisco 2900 Series ISR routers with hardware encryption modules",
            "Unmanaged branch switches with port security enabled",
            "External consumer firewall appliances placed in front of each router",
            "Cisco Catalyst 8300 Series Edge Platforms with on-box containerized Snort IPS and Talos signature feeds"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. A large utility company is redesigning its primary data center WAN headend to aggregate traffic from over 1,200 remote substations. The Lead Network Architect requires 100G uplinks, wire-rate hardware cryptographic acceleration, and multi-gigabit IPsec throughput. Which Cisco Catalyst 8000 series routing platform is purpose-built for data center headend aggregation using the Cisco QuantumFlow Processor 3.0 (QFP 3.0) ASIC?",
          "why": "Silicon & Hardware Architecture: The Catalyst 8500 is Cisco's flagship enterprise WAN headend platform, powered by the custom QuantumFlow Processor 3.0 ASIC. It provides high-density 10G/40G/100G interfaces, massive route table scalability, and dedicated crypto-engine throughput for large-scale aggregation.",
          "kind": "choice",
          "choices": [
            "Cisco Catalyst 1000 Series Access Switches",
            "Cisco Catalyst 8000V Virtual Router",
            "Cisco Catalyst 8500 Series Edge Platforms",
            "Cisco Catalyst 8200 Series Edge Platforms"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. You are an Account Executive pitching Cisco's Security Service Edge (SSE) / SASE strategy to a customer looking to modernize their remote worker security and retire legacy standalone VPN appliances. Which TWO capabilities of Cisco Secure Access (SSE) and Cisco Secure Client should you highlight to demonstrate modern Zero Trust remote access? (Choose two)",
          "why": "SASE/SSE Convergence: Cisco Secure Client: Eliminates endpoint agent sprawl by integrating VPN, ZTNA, ISE Posture, and Umbrella cloud security into one client. Cisco Secure Access: Cisco's cloud-native SSE solution delivering least-privilege ZTNA, SWG, CASB, and DNS security in a single cloud platform.",
          "kind": "choice",
          "choices": [
            "Cisco Secure Client consolidates VPN, Zero Trust Network Access (ZTNA), and Cloud Roaming security into a single endpoint agent.",
            "All remote worker web traffic must be permanently unencrypted for security analysis.",
            "Cisco Secure Access requires hardware firewall appliances at every remote employee home.",
            "Cisco Secure Access provides converged cloud-delivered security including Secure Web Gateway (SWG), Cloud Access Security Broker (CASB), and DNS-layer protection.",
            "Zero Trust Network Access grants broad, unrestricted network-level access to the entire data center subnet."
          ],
          "answers": [
            0,
            3
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. An enterprise customer must deploy 400 new branch routers across 12 states within 60 days. The customer has minimal on-site IT personnel and cannot afford to send senior engineers to each site for manual configuration. How does Cisco Zero-Touch Provisioning (ZTP) / Network Plug and Play (PnP) streamline this deployment?",
          "why": "Operational ROI: Cisco Network PnP / ZTP eliminates Day-0 staging labor. When an unconfigured router connects to power and internet, it reaches out over secure HTTPS to Cisco PnP Connect, validates its hardware Secure Unique Device Identifier (SUDI), and automatically joins the customer's SD-WAN fabric.",
          "kind": "choice",
          "choices": [
            "Routers automatically connect to devicehelper.cisco.com via DHCP, authenticate their hardware SUDI serial certificates, and automatically download bootstrap configurations from vBond/vManage.",
            "Routers download firmware images via unencrypted file broadcasts across the public internet.",
            "Onsite staff must format the internal flash drive using a USB recovery key.",
            "Technicians must connect a serial console cable to every router and manually type IP addresses."
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. A financial customer running voice and video over SD-WAN requires sub-second path failover if an ISP circuit experiences packet loss or jitter exceeding strict SLA thresholds. Which protocol runs continuously over all SD-WAN IPsec data plane tunnels to measure real-time latency, jitter, and packet loss for Application-Aware Routing (AAR)?",
          "why": "Technical Metric: BFD packets run over all data plane IPsec tunnels at sub-second intervals. Catalyst SD-WAN calculates real-time jitter, loss, and latency metrics from BFD echoes, triggering dynamic Application-Aware Routing (AAR) adjustments before voice/video calls experience degradation.",
          "kind": "choice",
          "choices": [
            "Address Resolution Protocol (ARP)",
            "Spanning Tree Protocol (STP)",
            "Simple Network Management Protocol (SNMP)",
            "Bidirectional Forwarding Detection (BFD)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. You are advising an IT Director on replacing legacy branch firewalls with Cisco Catalyst 8000 integrated on-box security capabilities. Which THREE on-box security capabilities can be managed centrally via Catalyst SD-WAN Manager (vManage)? (Choose three)",
          "why": "Security Suite Integration: Cisco Catalyst 8000 routers support full-stack branch security managed centrally through vManage templates: Zone-Based Firewall (stateful inspection), Snort IPS/IDS (signature-based exploit prevention), and URL Filtering (Talos web categories).",
          "kind": "choice",
          "choices": [
            "Snort-powered Intrusion Prevention System (IPS/IDS)",
            "Physical biometric door access control",
            "Zone-Based Policy Firewall (ZBFW)",
            "Mainframe storage volume replication",
            "URL Filtering with Cisco Talos reputation feeds"
          ],
          "answers": [
            0,
            2,
            4
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Customer scenario. A defense customer with an air-gapped classified network requires a Cisco Catalyst SD-WAN deployment. Due to government compliance, no traffic or telemetry may exit to public cloud environments. How should the Cisco SD-WAN control plane be architected for this customer?",
          "why": "Compliance & Deployment Options: While Cisco Cloud-Hosted is the standard deployment model, Cisco Catalyst SD-WAN fully supports self-hosted on-prem OVA/KVM virtual deployments for defense, intelligence, and air-gapped utility environments requiring complete data sovereignty.",
          "kind": "choice",
          "choices": [
            "Use standard Cisco Cloud-Hosted controllers over the public internet.",
            "Deploy consumer Wi-Fi routers as controllers.",
            "Deploy a self-hosted on-premises controller cluster (vManage, vSmart, vBond) inside the customer's private data center infrastructure.",
            "Disable all vSmart controllers and manage routers via individual static routes."
          ],
          "answers": [
            2
          ]
        }
      ]
    },
    {
      "id": 2,
      "day": "Questions 11–20",
      "title": "Secure Enterprise Routing & SD-WAN · Secure Switching, Silicon & Campus Fabric",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Match each Cisco Catalyst SD-WAN Architecture Plane & Component to its core operational responsibility:",
          "why": "Why these pairings: vManage: Management plane (GUI, policies, telemetry, Day-N operations). vSmart: Control plane (OMP routing, policy execution, key distribution). vBond: Orchestration plane (initial zero-trust authentication, NAT traversal). cEdge: Data plane (IPsec data forwarding, local application classification, routing enforcement).",
          "kind": "match",
          "pairs": [
            {
              "concept": "vManage (Catalyst SD-WAN Manager)",
              "outcome": "Management Plane: Single pane of glass for central configuration, policies, Day-0 provisioning, and software upgrades."
            },
            {
              "concept": "vSmart (Catalyst SD-WAN Controller)",
              "outcome": "Control Plane: Distributes routing, policy, and encryption keys across edge routers via OMP peering."
            },
            {
              "concept": "vBond (Catalyst SD-WAN Validator)",
              "outcome": "Orchestration Plane: Authenticates edge routers, performs NAT traversal discovery, and facilitates fabric join."
            },
            {
              "concept": "cEdge / Catalyst 8000 (Edge Router)",
              "outcome": "Data Plane: Forwards end-user traffic over secure IPsec overlay tunnels and enforces local QoS/security."
            }
          ]
        },
        {
          "domain": "Domain 1: Secure Enterprise Routing & SD-WAN",
          "q": "Match each Cisco Security Service Edge (SSE) / SASE capability to the customer security challenge it solves:",
          "why": "Why these pairings: ZTNA: Replaces legacy flat VPNs with granular, per-app micro-tunnels. CASB: Protects corporate data stored in sanctioned/unsanctioned cloud SaaS apps. SWG: Full web proxy for content filtering and malware inspection. DNS-Layer Security: Blocks threat domains at the recursive resolution phase.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Zero Trust Network Access (ZTNA)",
              "outcome": "Replaces broad network VPN access with least-privilege, application-specific access per verified user and device."
            },
            {
              "concept": "Cloud Access Security Broker (CASB)",
              "outcome": "Discovers Shadow IT, enforces data loss prevention (DLP), and governs SaaS application usage."
            },
            {
              "concept": "Secure Web Gateway (SWG)",
              "outcome": "Inspects outbound web/HTTP traffic, performs SSL decryption, and blocks malicious URLs/malware."
            },
            {
              "concept": "DNS-Layer Security (Umbrella)",
              "outcome": "First line of defense that blocks malware, phishing, and C2 callbacks before a TCP connection is established."
            }
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. You are presenting an enterprise campus core refresh to the CTO of a major university. The campus network connects 50,000 students and requires 400G core uplinks, massive route table scalability, and wire-rate security. Which Cisco Catalyst switch architecture and supervisor engine delivers web-scale Silicon One performance into the enterprise campus core?",
          "why": "Silicon Innovation: The Catalyst 9600 Sup-2XL incorporates Cisco Silicon One architecture, bringing web-scale routing performance, 400G port density, and massive FIB scale into modular campus core and aggregation deployments.",
          "kind": "choice",
          "choices": [
            "Cisco Catalyst 3850 Series with legacy ASICs",
            "Cisco Catalyst 9200 Series with fixed uplink modules",
            "Cisco Catalyst 9600 Series with Supervisor Engine 2XL (Sup-2XL) powered by Cisco Silicon One",
            "Cisco Meraki MS120 access switches"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. A hospital is preparing for a major Wi-Fi 6E/7 upgrade requiring multi-gigabit uplinks (2.5G/5G). The Facilities Director warns that pulling new Cat6A cabling through hospital walls and patient suites would cost $1.8M and disrupt patient care. How does Cisco Multigigabit (mGig / IEEE 802.3bz) technology on Catalyst 9300 switches solve this financial and operational dilemma?",
          "why": "Commercial & TCO Rationale: Cisco mGig auto-negotiates multi-gigabit data rates over existing deployed Cat5e/Cat6 copper infrastructure. By deploying Catalyst 9300 mGig switches, the customer avoids multimillion-dollar recabling costs while fully supporting high-throughput Wi-Fi 6E/7 APs.",
          "kind": "choice",
          "choices": [
            "It delivers 2.5 Gbps, 5 Gbps, and 10 Gbps speeds over the hospital's existing Cat5e and Cat6 cabling runs, eliminating the $1.8M recabling expense.",
            "It converts existing electrical power outlets into high-speed Ethernet ports.",
            "It runs Wi-Fi signals directly through hospital plumbing pipes.",
            "It requires the hospital to replace all copper cables with single-mode fiber."
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. A financial headquarters requires a highly available distribution layer with sub-second failover. The Lead Engineer wants to pair two chassis switches into a single logical entity using 10G/40G fiber links without physical stacking cables. Which Cisco Catalyst technology combines two physical distribution switches into a single logical management and forwarding plane using Virtual Switch Links (VSL) and Dual-Active Detection (DAD)?",
          "why": "Campus Resiliency: StackWise Virtual (SVL) combines two Catalyst 9400, 9500, or 9600 switches into a single logical system. It creates a loop-free Layer 2/3 topology, eliminates Spanning Tree blocking, and uses Dual-Active Detection (DAD) to prevent split-brain failure scenarios.",
          "kind": "choice",
          "choices": [
            "Hardware Power Stacking",
            "Spanning Tree 802.1D",
            "Static Route Tracking with IP SLA",
            "Cisco StackWise Virtual (SVL)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. An enterprise media customer experiences intermittent packet drops and video stutter during high-definition live video broadcasts and heavy file transfers across campus access switches. Which architectural feature of the Cisco UADP 3.0 ASIC prevents packet drops during bursty multimedia traffic?",
          "why": "ASIC Architecture: The Cisco UADP 3.0 ASIC utilizes a centralized, shared packet buffer memory architecture. Unlike traditional switches with rigid per-port buffers, UADP dynamically allocates memory to ports experiencing microbursts, preventing packet loss in demanding broadcast and medical imaging environments.",
          "kind": "choice",
          "choices": [
            "Automatically dropping all UDP packets when CPU load exceeds 50%.",
            "Limiting all video streams to 480p resolution.",
            "Fixed 1 MB packet buffers permanently assigned to each switch port.",
            "A unified, shared on-chip packet buffer memory architecture with dynamic queue allocation."
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. You are meeting with the VP of Real Estate & Sustainability for a commercial office building seeking LEED sustainability certification. The customer wants to power smart DC lighting, automated shading, and IoT sensor arrays via Ethernet cabling. Which TWO Cisco technologies should you present to deliver smart building power and occupancy-based energy reduction? (Choose two)",
          "why": "Smart Building Strategy: Cisco UPOE+ (90W): Delivers standards-based 802.3bt power to smart LED fixtures, shading motors, and environmental sensors. Cisco Spaces: Leverages Wi-Fi/BLE location telemetry to monitor real-time room occupancy, allowing facilities teams to automate smart power shedding in empty conference rooms and floor wings.",
          "kind": "choice",
          "choices": [
            "Cisco Catalyst 9000 UPOE+ delivering up to 90 Watts of Power over Ethernet per port (IEEE 802.3bt).",
            "Cisco Spaces occupancy analytics to dynamically automate lighting and HVAC schedules for unpopulated zones.",
            "Disabling PoE power permanently across the entire network.",
            "Deploying diesel backup generators on every office floor.",
            "Running high-voltage 240V AC power cables inside Ethernet conduits."
          ],
          "answers": [
            0,
            1
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. A government utility network must encrypt all traffic traversing campus inter-building fiber connections to prevent fiber-tapping and eavesdropping attacks. Which IEEE standard provides line-rate, hardware-based Layer 2 point-to-point encryption (supporting 128-bit and 256-bit AES) on Cisco Catalyst 9000 switch uplinks?",
          "why": "Hardware Encryption: MACsec (802.1AE) delivers line-rate, point-to-point Layer 2 hardware encryption (128-bit / 256-bit AES) on switch-to-switch and switch-to-client uplinks without throughput degradation or CPU overhead.",
          "kind": "choice",
          "choices": [
            "IEEE 802.3x (Flow Control)",
            "IEEE 802.1AE (MACsec)",
            "IEEE 802.1p (QoS Priority)",
            "IEEE 802.1Q (VLAN Tagging)"
          ],
          "answers": [
            1
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. A retail customer wants to deploy ThousandEyes synthetic network monitoring across 300 stores to troubleshoot SaaS application performance without purchasing dedicated hardware appliances at each site. How does Cisco Catalyst 9000 Application Hosting solve this customer requirement?",
          "why": "Application Hosting (IOx): Catalyst 9000 switches support on-box application hosting, allowing signed Docker containers (like ThousandEyes Enterprise Agents and CyberVision sensors) to execute natively on switch hardware, eliminating separate appliance CapEx and remote maintenance.",
          "kind": "choice",
          "choices": [
            "It requires shipping a standalone Linux server to every retail store.",
            "It simulates user transactions using automated keyboard typing scripts.",
            "It runs synthetic tests from public cloud data centers only.",
            "It runs ThousandEyes Enterprise Agent Docker containers directly on the Catalyst 9300 switch CPU via the Cisco IOx framework."
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. A CISO wants to detect advanced malware and Command-and-Control (C2) communication within encrypted TLS 1.3 employee traffic across the campus network without performing invasive, compute-heavy SSL/TLS decryption. Which Cisco switching and security technology analyzes cryptographic metadata, initial data packets, and packet lengths directly in hardware Flexible NetFlow?",
          "why": "Privacy-Preserving Threat Detection: Catalyst 9000 ASICs extract Sequence of Packet Lengths and Times (SPLT) and Initial Data Packet (IDP) metadata via Encrypted Traffic Analytics (ETA). Cisco Secure Network Analytics applies machine learning against this telemetry to pinpoint malware without decrypting payloads.",
          "kind": "choice",
          "choices": [
            "Disabling all SSL encryption on client laptops",
            "Blocking all HTTPS port 443 web traffic",
            "Encrypted Traffic Analytics (ETA) exporting telemetry to Cisco Secure Network Analytics (Stealthwatch)",
            "Deploying keystroke loggers on all employee workstations"
          ],
          "answers": [
            2
          ]
        }
      ]
    },
    {
      "id": 3,
      "day": "Questions 21–30",
      "title": "Secure Switching, Silicon & Campus Fabric · Secure Enterprise Wireless & Cisco Spaces",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. An enterprise customer is designing a high-density wiring closet stack with eight 48-port access switches supporting Wi-Fi 7 APs and multi-gigabit endpoints. The customer requires maximum backplane stacking bandwidth to prevent stack bottlenecks. Which Cisco Catalyst switch model introduces StackWise-1T, delivering up to 1 Terabit per second (1000 Gbps) of unified hardware stacking throughput?",
          "why": "High-Performance Access: Catalyst 9300X models feature StackWise-1T, providing up to 1 Tbps of stacking backplane throughput, purpose-built for high-density mGig Wi-Fi 6E/7 and high-throughput uplink aggregation.",
          "kind": "choice",
          "choices": [
            "Cisco Catalyst 3560 Series Switches",
            "Cisco Catalyst 1000 Series Switches",
            "Cisco Catalyst 9200L Series Switches",
            "Cisco Catalyst 9300X Series Switches"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Customer scenario. During a campus core maintenance window, a customer must upgrade the active supervisor engine in a modular Catalyst 9400 chassis without interrupting live video conferences or medical telemetry streams. Which Cisco high-availability technology ensures zero packet drop and sub-second control plane failover during supervisor maintenance?",
          "why": "High Availability: SSO continuously mirrors routing protocols and session state between redundant supervisor engines. Upon supervisor failover, NSF ensures hardware ASICs continue forwarding packets without disruption or routing table reconvergence.",
          "kind": "choice",
          "choices": [
            "Nonstop Forwarding with Stateful Switchover (NSF/SSO)",
            "Manual cold-reboot of the entire chassis",
            "Unplugging and replugging all line card cables",
            "Configuring static default routes on all access switches"
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Match each Cisco Catalyst 9000 Switch Series to its ideal enterprise architectural role:",
          "why": "Why these pairings: Cat 9200: Cost-effective branch access. Cat 9300X: Premium mGig / 1 Tbps stacking access. Cat 9400: Modular chassis access/distribution. Cat 9600: 400G Silicon One campus core.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Catalyst 9200 Series",
              "outcome": "Branch / Simple Access: Cost-effective enterprise switching with basic Layer 3 routing, UADP 2.0mini, and StackWise-160."
            },
            {
              "concept": "Catalyst 9300X Series",
              "outcome": "High-Density Campus Access: High-speed mGig, UPOE+ 90W, StackWise-1T, 100G uplinks, and on-box container hosting."
            },
            {
              "concept": "Catalyst 9400 Series",
              "outcome": "Modular Enterprise Access/Core: Flexible chassis with redundant supervisors (NSF/SSO), high slot density, and investment protection."
            },
            {
              "concept": "Catalyst 9600 Series (Sup-2XL)",
              "outcome": "Web-Scale Campus Core: Silicon One ASICs delivering 400G port density, massive route scalability, and high-resiliency core routing."
            }
          ]
        },
        {
          "domain": "Domain 2: Secure Switching, Silicon & Campus Fabric",
          "q": "Match each Cisco Switching Architectural Feature to the customer business value it provides:",
          "why": "Why these pairings: Silicon One: Web-scale routing convergence and power efficiency. UADP Shared Memory: Eliminates packet loss during microbursts. StackWise Virtual: High-availability loop-free active-active distribution. mGig: Eliminates building recabling CapEx for Wi-Fi 6E/7.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Cisco Silicon One Architecture",
              "outcome": "Converges web-scale performance, massive routing scale, and power efficiency into the enterprise campus core."
            },
            {
              "concept": "UADP 3.0 ASIC Shared Memory",
              "outcome": "Eliminates bursty packet drops during video broadcasts through dynamic on-chip packet buffer memory pools."
            },
            {
              "concept": "StackWise Virtual (SVL)",
              "outcome": "Combines two distribution switches into a single logical management entity, eliminating Spanning Tree loops."
            },
            {
              "concept": "Multigigabit (mGig / 802.3bz)",
              "outcome": "Delivers 2.5G/5G/10G speeds over legacy Cat5e/Cat6 copper cabling, avoiding multimillion-dollar recabling costs."
            }
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. You are designing an outdoor campus Wi-Fi 6E/7 network for a corporate headquarters. The customer is deploying Standard Power (SP) access points and must comply with FCC 6 GHz RF transmission regulations. Which regulatory system must Standard Power 6 GHz Access Points query to obtain permissible channels and power levels to avoid interfering with incumbent commercial microwave links?",
          "why": "6 GHz Regulatory Standards: Under FCC regulations, Standard Power (SP) Wi-Fi 6E and Wi-Fi 7 APs must query a certified cloud-based Automated Frequency Coordination (AFC) system with their geographic coordinates to dynamically receive authorized channels and transmit power levels.",
          "kind": "choice",
          "choices": [
            "Automated Frequency Coordination (AFC)",
            "Carrier Sense Multiple Access (CSMA/CA)",
            "Spanning Tree Protocol (STP)",
            "Dynamic Address Assignment (DHCP)"
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A healthcare provider loses $400,000 annually due to misplaced mobile infusion pumps, wheelchairs, and portable ultrasound machines. The hospital wants to track these assets in real time without deploying separate third-party sensor networks. How do Cisco Catalyst 9100 Access Points combined with Cisco Spaces solve this asset-tracking challenge?",
          "why": "Business Outcome: Catalyst 9100 APs contain integrated BLE/IoT radios. Combined with Cisco Spaces, the hospital gains real-time indoor location tracking, geofencing alerts, and utilization heatmaps for critical medical gear, delivering rapid ROI.",
          "kind": "choice",
          "choices": [
            "Catalyst APs leverage integrated BLE/Wi-Fi scanning to feed real-time asset telemetry directly into Cisco Spaces maps and asset dashboards.",
            "All medical assets must be hardwired with 50-foot Ethernet cables.",
            "The hospital must place metal detectors at every door.",
            "Nurses must manually scan barcode tags with handheld scanners every hour."
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A stadium and entertainment district currently uses Cisco Spaces 'See' for basic Wi-Fi occupancy heatmaps. The Chief Marketing Officer wants to launch real-time captive portal engagement, partner loyalty app integration, and automated SMS alerts. Which Cisco Spaces subscription upgrade should you position to deliver real-time engagement workflows and enterprise partner integrations?",
          "why": "Spaces Tiering & Commercials: See: Location analytics and occupancy (included with DNA Advantage). Act: Real-time captive portal engagement, behavioral rules, and SMS triggers. Extend: Bidirectional APIs, BLE sensor ecosystem, and third-party enterprise app integrations.",
          "kind": "choice",
          "choices": [
            "Cisco Spaces 'Basic' tier",
            "Cisco Webex Calling Suite",
            "Replacing all access points with consumer Wi-Fi extenders",
            "Cisco Spaces 'Act' and 'Extend' tiers"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A hospital requires uninterrupted wireless connectivity for mobile VoIP phones and clinician tablets. If the primary Catalyst 9800 WLC experiences a hardware failure, active calls must not drop. Which high-availability feature on Cisco Catalyst 9800 Wireless Controllers maintains active client authentication, session keys, and IP state with sub-second hitless failover?",
          "why": "High Availability Rationale: Catalyst 9800 Client SSO mirrors active client associations, PMKs, and DHCP leases between redundant active-standby controllers. Upon controller failover, client traffic continues flowing seamlessly without re-authentication or dropped voice/video sessions.",
          "kind": "choice",
          "choices": [
            "Re-authenticating all clients through RADIUS over 5 minutes",
            "Cold Standby N+1 High Availability",
            "Client Stateful Switchover (Client SSO)",
            "Manual WLC reboot script"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A regional bank is opening 50 small branch offices with 6 to 10 APs per branch. The customer wants enterprise Catalyst 9800 features but cannot justify the cost of dedicated hardware WLC appliances at each small site. Which architectural deployment mode delivers the complete Catalyst 9800 IOS-XE wireless control plane directly inside a Catalyst 9100 Access Point?",
          "why": "Branch Architecture: Cisco EWC packages the Catalyst 9800 IOS-XE control plane inside a designated master Catalyst 9100 AP, managing up to 100 APs and 2,000 clients with full enterprise policy parity without dedicated WLC hardware.",
          "kind": "choice",
          "choices": [
            "Standalone Consumer Mode",
            "Cisco Embedded Wireless Controller (EWC-AP)",
            "Autonomous Fat AP mode",
            "Disabling all encryption and routing locally"
          ],
          "answers": [
            1
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A manufacturing facility experiences severe, intermittent Wi-Fi drops near industrial welding equipment and high-frequency motors operating across 2.4 GHz, 5 GHz, and 6 GHz spectrums. Which Cisco wireless technology utilizes dedicated hardware scanning radios and embedded AI/ML processing to classify and mitigate non-Wi-Fi RF interference across all three frequency bands concurrently?",
          "why": "Spectrum Intelligence: Cisco CleanAir Pro incorporates dedicated multi-radio hardware chipsets and AI/ML algorithms in Wi-Fi 6E/7 APs, detecting and evading non-Wi-Fi interferers across 2.4, 5, and 6 GHz in real time.",
          "kind": "choice",
          "choices": [
            "Legacy Dynamic Channel Assignment (DCA) only",
            "Disabling 5 GHz and 6 GHz radios permanently",
            "Cisco CleanAir Pro",
            "Manual spectrum analyzer site surveys"
          ],
          "answers": [
            2
          ]
        }
      ]
    },
    {
      "id": 4,
      "day": "Questions 31–40",
      "title": "Secure Enterprise Wireless & Cisco Spaces · Identity, Segmentation, ISE & Zero Trust",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A distributed retail customer with 200 remote stores wants all local store Wi-Fi traffic (cash registers, inventory tablets) to switch directly onto the local store subnet, ensuring business continuity even if the central WAN connection drops. Which Cisco AP deployment mode allows local client data switching while centralizing wireless management and authentication at a central Catalyst 9800 WLC?",
          "why": "Survivable Branch Wireless: FlexConnect allows branch APs to switch client data frames directly onto the local VLAN (Local Switching) while maintaining CAPWAP control tunneling to a central WLC. If the WAN fails, local wireless operations continue uninterrupted.",
          "kind": "choice",
          "choices": [
            "Bridge Point-to-Point Mode",
            "Sniffer Mode",
            "Centralized Local Mode (Full Tunneling)",
            "Cisco FlexConnect Mode (Local Switching)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. A defense contractor requires government-certified wireless encryption meeting Commercial National Security Algorithm (CNSA Suite / Suite B) cryptographic standards. Which wireless security configuration on Cisco Catalyst 9800 controllers mandates mutual EAP-TLS certificate authentication and 256-bit GCMP encryption?",
          "why": "High-Assurance Security: WPA3-Enterprise 192-bit mode mandates 256-bit GCMP encryption, SHA-384 hashing, ECDHE key exchange, and mutual EAP-TLS digital certificates, satisfying strict NSA CNSA government requirements.",
          "kind": "choice",
          "choices": [
            "WPA2-Personal with Pre-Shared Key (PSK)",
            "Open Wi-Fi with Web Authentication redirect",
            "WPA3-Enterprise 192-bit Security Mode (CNSA Suite)",
            "WPA-TKIP with 64-bit encryption"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. An automotive engineering customer is piloting real-time autonomous robotics and augmented reality (AR) headsets on the factory floor, requiring deterministic sub-5ms latency and massive throughput. Which flagship feature of Cisco Wi-Fi 7 (802.11be) allows client devices to transmit and receive data across multiple frequency bands (e.g., 5 GHz and 6 GHz) simultaneously?",
          "why": "Wi-Fi 7 Innovation: Multi-Link Operation (MLO) enables Wi-Fi 7 devices to aggregate multiple bands (2.4, 5, and 6 GHz) concurrently, drastically multiplying throughput and slashing latency for mission-critical industrial robotics and immersive AR/VR.",
          "kind": "choice",
          "choices": [
            "Manual Channel Selection",
            "Single-Band Scanning",
            "Multi-Link Operation (MLO)",
            "Orthogonal Frequency Division Multiplexing (OFDM)"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Customer scenario. An enterprise facilities team wants to optimize office energy consumption and track employee return-to-office trends across 15 floors without purchasing dedicated badge-tracking hardware. Which TWO Cisco capabilities provide automated smart building occupancy insights and power optimization? (Choose two)",
          "why": "Smart Building Optimization: Cisco Spaces uses existing Wi-Fi/BLE client signals to generate real-time occupancy heatmaps, while Catalyst Center EnergyWise automates scheduled PoE shutdown for smart lighting and VoIP devices in empty office areas.",
          "kind": "choice",
          "choices": [
            "Replacing all access points with optical fiber transceivers.",
            "Cisco Catalyst Center EnergyWise automation to schedule PoE power reduction for unpopulated zones during off-hours.",
            "Cisco Spaces occupancy analytics to visualize real-time floor heatmaps and room density.",
            "Disabling all corporate Wi-Fi between 9:00 AM and 5:00 PM.",
            "Requiring security guards to manually count employees at elevator banks."
          ],
          "answers": [
            1,
            2
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Match each Cisco Spaces Tier / Capability to the business outcome it delivers:",
          "why": "Why these pairings: See: Base location analytics & occupancy. Act: Real-time captive portals & engagement triggers. Extend: Enterprise partner APIs & BLE IoT ecosystem. Energy Automation: Occupancy-driven UPOE+ power reduction.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Cisco Spaces 'See'",
              "outcome": "Location analytics, real-time device density heatmaps, and 2D floorplan visualization ($0 added cost on DNA Advantage)."
            },
            {
              "concept": "Cisco Spaces 'Act'",
              "outcome": "Real-time engagement triggers, captive portal visitor onboarding, and automated SMS/email alerts."
            },
            {
              "concept": "Cisco Spaces 'Extend'",
              "outcome": "Bidirectional partner app integrations, open REST APIs, and multi-vendor BLE/IoT sensor management."
            },
            {
              "concept": "Smart Building Energy Automation",
              "outcome": "Correlates real-time occupancy data with Catalyst UPOE+ to dynamically power down lighting/HVAC in empty zones."
            }
          ]
        },
        {
          "domain": "Domain 3: Secure Enterprise Wireless & Cisco Spaces",
          "q": "Match each Cisco Wireless Deployment Mode / Feature to its architectural description:",
          "why": "Why these pairings: FlexConnect: Local branch data switching & survivability. EWC: On-AP virtual Catalyst 9800 controller. Client SSO: Hitless sub-second WLC failover. CleanAir Pro: AI/ML multi-radio spectrum classification.",
          "kind": "match",
          "pairs": [
            {
              "concept": "FlexConnect Local Switching",
              "outcome": "Switches branch client data traffic onto the local LAN while keeping management control centralized at the WLC."
            },
            {
              "concept": "Embedded Wireless Controller (EWC)",
              "outcome": "Runs the Catalyst 9800 IOS-XE control plane directly inside a Catalyst 9100 AP for branch sites without WLC appliances."
            },
            {
              "concept": "Client Stateful Switchover (SSO)",
              "outcome": "Mirrors active client authentication and session state across redundant WLCs for hitless sub-second failover."
            },
            {
              "concept": "Cisco CleanAir Pro",
              "outcome": "Employs dedicated scanning radios with on-chip AI/ML to classify and evade RF interferers across 2.4, 5, and 6 GHz."
            }
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A financial CISO wants to eliminate vulnerable user passwords on the corporate network and enforce mutual cryptographic certificate verification for all wired and wireless employee laptops. Which 802.1X authentication protocol utilizes mutual X.509 digital certificates between the client and Cisco ISE to eliminate password-spraying and phishing attacks?",
          "why": "Zero Trust Authentication: EAP-TLS is the gold standard for enterprise 802.1X. It mandates mutual cryptographic validation using X.509 certificates on both the client device and Cisco ISE, eliminating shared passwords, credential theft, and MITM attacks.",
          "kind": "choice",
          "choices": [
            "PAP (Password Authentication Protocol)",
            "Cleartext HTTP Basic Authentication",
            "EAP-TLS (Extensible Authentication Protocol - Transport Layer Security)",
            "PEAP-MSCHAPv2"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A hospital IT team needs to automatically discover, classify, and profile 15,000 unmanaged medical telemetry devices, smart beds, and IP security cameras connecting to access switches without deployed software agents. Which TWO Cisco ISE profiling probes should be enabled to accurately classify these IoT endpoints based on network behavior and broadcast parameters? (Choose two)",
          "why": "Agentless Device Profiling: Cisco ISE profiles unmanaged IoT devices by analyzing network telemetry: DHCP Probes inspect Option 55/60 attributes, while RADIUS Accounting Probes ingest real-time switch session metadata.",
          "kind": "choice",
          "choices": [
            "DHCP Profiling Probe (inspecting Option 55 parameter request lists and Option 60 vendor class identifiers)",
            "RADIUS Accounting Probe (inspecting framed-IP and NAS-port attributes sent by access switches)",
            "Manual spreadsheet entry by helpdesk technicians",
            "Sending automated test emails to every medical device",
            "Disabling all 802.1X authentication on medical VLANs"
          ],
          "answers": [
            0,
            1
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. You are sizing a distributed Cisco ISE 3.x deployment for a global enterprise with 100,000 active endpoints across 40 geographic locations. The customer requires high availability and centralized policy administration. Which ISE node persona is deployed at regional data centers to process active RADIUS/TACACS+ authentications and evaluate authorization policies locally?",
          "why": "ISE Architecture & Sizing: In distributed deployments, dedicated Policy Service Nodes (PSNs) are deployed geographically close to network access devices to handle active authentication and policy evaluation, while centralized PAN/MnT clusters manage admin GUI and monitoring.",
          "kind": "choice",
          "choices": [
            "Primary Administration Node (PAN)",
            "External Syslog Server",
            "Policy Service Node (PSN)",
            "Monitoring and Troubleshooting Node (MnT)"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A customer needs to restrict third-party contractor laptops from accessing sensitive HR payroll servers. Both contractors and HR staff connect to the same switch and share the same IP subnet. The customer cannot re-architect their IP address scheme or create new VLANs. Which Cisco TrustSec technology enforces granular peer-to-peer microsegmentation within the same IP subnet using 16-bit tags and switch hardware TCAM?",
          "why": "Microsegmentation: Cisco TrustSec assigns 16-bit Security Group Tags (SGTs) based on user/device identity (e.g., SGT 10 = Contractor, SGT 20 = HR). Access switches enforce SGACL matrix rules in hardware TCAM, blocking unauthorized traffic between endpoints on the exact same subnet.",
          "kind": "choice",
          "choices": [
            "Static Layer 2 MAC Address Filtering",
            "Legacy Spanning Tree Bridge Priorities",
            "Security Group Tags (SGTs) and Security Group ACLs (SGACLs)",
            "Dynamic DNS Updates"
          ],
          "answers": [
            2
          ]
        }
      ]
    },
    {
      "id": 5,
      "day": "Questions 41–50",
      "title": "Identity, Segmentation, ISE & Zero Trust · Operations, Cloud Control & Commercials",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A Security Operations Center (SOC) running Cisco XDR and Splunk detects ransomware activity on an employee laptop. The SOC analyst must instantly isolate the infected PC from the network via an automated API call. Which Cisco ISE feature enables external security systems to dynamically quarantine, terminate, or port-bounce a compromised endpoint via REST/pxGrid APIs?",
          "why": "Automated Threat Containment: ISE Adaptive Network Control (ANC) allows external SIEM, SOAR, and XDR platforms to trigger programmatic quarantine actions (Quarantine SGT, Port Bounce, Shutdown) via pxGrid APIs, neutralizing active attacks in seconds.",
          "kind": "choice",
          "choices": [
            "Dynamic ARP Inspection (DAI)",
            "BPDU Guard",
            "Port Security Sticky MAC",
            "Adaptive Network Control (ANC)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. An enterprise IT organization manages asset records and device ownership in ServiceNow CMDB. The CISO wants Cisco ISE to automatically ingest this asset metadata to dynamically enrich endpoint profiling without writing custom middleware scripts. Which Cisco ISE 3.x feature provides direct out-of-the-box REST API synchronization with external CMDBs like ServiceNow?",
          "why": "Ecosystem Integration: pxGrid Direct in ISE 3.x establishes scheduled REST API connectors directly to external repositories (ServiceNow, Jamf, Medigate), automatically pulling CMDB asset context into ISE endpoint records without custom code.",
          "kind": "choice",
          "choices": [
            "Manual CSV file import once per month",
            "Cisco ISE pxGrid Direct",
            "SNMP v1 Community Polling",
            "Unencrypted terminal scraping scripts"
          ],
          "answers": [
            1
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A pharmaceutical manufacturing plant needs to secure industrial PLCs (Rockwell, Siemens) on the factory floor. Plant managers strictly prohibit adding software agents on legacy automation equipment or disrupting production lines. How does Cisco CyberVision running natively on Cisco Industrial Ethernet (IE) switches deliver deep packet inspection (DPI) and OT asset visibility into Cisco ISE?",
          "why": "OT Security Architecture: CyberVision runs natively inside Cisco IE industrial switches, passively analyzing industrial protocols at the edge. It maps industrial components and syncs device criticality into ISE via pxGrid for automated OT microsegmentation.",
          "kind": "choice",
          "choices": [
            "CyberVision software runs as an embedded IOx container on IE switches, passively decoding industrial protocols (Modbus, CIP, Profinet) and exporting asset context to ISE via pxGrid.",
            "CyberVision converts all industrial protocols into HTTP web traffic.",
            "CyberVision requires software agents on every physical industrial robot.",
            "CyberVision replaces all factory machinery with commercial office laptops."
          ],
          "answers": [
            0
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. You are presenting Cisco Software-Defined Access (SD-Access) to an enterprise architecture committee looking to simplify complex campus VLAN sprawl and implement Zero Trust segmentation. Which TWO architectural mechanisms in SD-Access deliver Macrosegmentation and Microsegmentation? (Choose two)",
          "why": "SD-Access Segmentation: Macrosegmentation: Isolated Virtual Networks / VRFs (e.g., Corporate, Guest, IoT) with zero communication unless routed through a perimeter firewall. Microsegmentation: SGTs/SGACLs enforce granular role-based access rules directly within the same Virtual Network.",
          "kind": "choice",
          "choices": [
            "Security Group Tags (SGTs) and SGACLs provide Microsegmentation by enforcing granular peer-to-peer security policies within a Virtual Network.",
            "Virtual Networks (VNs / VRFs) provide Macrosegmentation by creating completely isolated Layer 3 routing instances across the fabric.",
            "Microsegmentation is achieved by assigning static IP addresses to all endpoints.",
            "Macrosegmentation requires physical air-gapping of all network cables.",
            "SD-Access eliminates all Layer 3 routing across the campus core."
          ],
          "answers": [
            0,
            1
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. A financial institution wants to enforce zero-trust microsegmentation across its core banking applications. However, the Risk Management team is terrified that a misconfigured rule will block legitimate transactions and cause an outage. Which Cisco Hypershield architecture allows security teams to test new microsegmentation policies and software updates against live mirrored traffic before enforcing them in production?",
          "why": "Safe Policy Enforcement: Cisco Hypershield's Dual Data Plane tests new security policies and updates in a shadow canary plane receiving live mirrored traffic. Security teams verify rule accuracy and eliminate false positives before promoting policies to production.",
          "kind": "choice",
          "choices": [
            "Simulating traffic using synthetic spreadsheet formulas",
            "Manual after-hours testing during production freezes",
            "Disabling all firewall rules in production",
            "Cisco Hypershield Dual Data Plane (Shadow Canary Testing)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Customer scenario. An enterprise is deploying Cisco TrustSec SGT-based security. However, several legacy access switches in remote buildings do not support native hardware inline SGT tagging in the Ethernet header. Which protocol allows Cisco ISE and TrustSec-enabled core switches to propagate IP-to-SGT binding tables to legacy non-inline devices over a standard TCP connection?",
          "why": "Brownfield Migration: SXP operates over TCP port 64999, transporting IP-to-SGT binding tables from ISE or TrustSec core switches to legacy edge switches and firewalls, enabling consistent policy enforcement across hybrid environments.",
          "kind": "choice",
          "choices": [
            "Trivial File Transfer Protocol (TFTP)",
            "Border Gateway Protocol (BGP)",
            "SGT Exchange Protocol (SXP)",
            "Internet Control Message Protocol (ICMP)"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Match each Cisco ISE Node Persona & Module to its core operational role:",
          "why": "Why these pairings: PSN: Active RADIUS/TACACS+ processing engine. PAN: Centralized GUI & configuration management. MnT: Logging, troubleshooting, and compliance analytics. Posture Module: Endpoint health & compliance verification.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Policy Service Node (PSN)",
              "outcome": "Authentication Workhorse: Evaluates active RADIUS/TACACS+ requests, evaluates policy rules, and issues authorizations."
            },
            {
              "concept": "Primary Administration Node (PAN)",
              "outcome": "Management Hub: Central GUI administrator portal, system configuration, and database replication master."
            },
            {
              "concept": "Monitoring & Troubleshooting (MnT)",
              "outcome": "Log & Telemetry Engine: Collects syslogs, generates compliance reports, and provides real-time Live Logs."
            },
            {
              "concept": "ISE Posture Module (Secure Client)",
              "outcome": "Health Assessor: Verifies disk encryption, antivirus definitions, and OS patches before granting full network access."
            }
          ]
        },
        {
          "domain": "Domain 4: Identity, Segmentation, ISE & Zero Trust",
          "q": "Match each Cisco Zero Trust Technology to the customer security outcome it delivers:",
          "why": "Why these pairings: TrustSec: Subnet-independent hardware microsegmentation. pxGrid Direct: Automated CMDB asset synchronization. ANC: Programmatic dynamic threat quarantine. Dual Data Plane: Zero-risk shadow policy testing.",
          "kind": "match",
          "pairs": [
            {
              "concept": "Cisco TrustSec (SGTs / SGACLs)",
              "outcome": "Enforces granular peer-to-peer microsegmentation within the same IP subnet directly in switch hardware TCAM."
            },
            {
              "concept": "Cisco ISE pxGrid Direct",
              "outcome": "Automates scheduled bi-directional asset metadata synchronization between external CMDBs (ServiceNow) and ISE."
            },
            {
              "concept": "ISE Adaptive Network Control (ANC)",
              "outcome": "Enables SOC platforms to dynamically quarantine infected endpoints via automated API triggers."
            },
            {
              "concept": "Hypershield Dual Data Plane",
              "outcome": "Validates new microsegmentation rules against live mirrored traffic in a shadow canary plane before production enforcement."
            }
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. An IT Director with 300 Catalyst 9300 access switches wants centralized cloud visibility into switch topology, port status, and client troubleshooting on the Meraki Dashboard without modifying switch IOS-XE firmware or losing CLI configuration control. Which Cisco capability delivers cloud management visibility for Catalyst switches while retaining full IOS-XE enterprise functionality?",
          "why": "Cloud Management Flexibility: Cloud Monitoring for Catalyst connects Catalyst 9000 switches to the Meraki Dashboard via a lightweight telemetry tunnel, providing instant cloud topology visualization and client diagnostics without altering existing IOS-XE configurations or CLI workflows.",
          "kind": "choice",
          "choices": [
            "Formatting all switches and loading Meraki MS firmware permanently",
            "Converting all switches to unmanaged consumer hubs",
            "Cisco Meraki Cloud Monitoring for Catalyst",
            "Managing switches via local text files stored on USB drives"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. A CIO reports that remote executive staff and branch employees frequently complain about intermittent video lag during Microsoft Teams and Webex meetings, but internal network monitoring tools show green / no issues. Which TWO ThousandEyes capabilities provide hop-by-hop visibility across the public internet and endpoint laptops to pinpoint the exact root cause? (Choose two)",
          "why": "End-to-End Observability: Endpoint Agents: Provide visibility into local Wi-Fi health and user device CPU/memory. Network Path Visualization: Maps every Layer 3 network hop across public ISPs, identifying external BGP routing flaps and carrier packet loss.",
          "kind": "choice",
          "choices": [
            "ThousandEyes Network Path Visualization to map hop-by-hop layer 3 latency and packet loss across ISP and SaaS provider networks.",
            "Replacing all home broadband routers with enterprise data center core switches.",
            "Disabling video conferencing for all employees.",
            "Running unencrypted broadcasts across the corporate network.",
            "ThousandEyes Endpoint Agents deployed on user laptops to monitor local Wi-Fi signal quality, CPU load, and gateway latency."
          ],
          "answers": [
            0,
            4
          ]
        }
      ]
    },
    {
      "id": 6,
      "day": "Questions 51–60",
      "title": "Operations, Cloud Control & Commercials",
      "blurb": "",
      "questions": [
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. A network engineering team spends over 25 hours per week investigating false alarms and static threshold alerts generated by legacy SNMP network monitoring tools. Which Cisco Catalyst Center (formerly DNA Center) capability applies machine learning against anonymized global telemetry to dynamically establish individualized site baselines and eliminate alert fatigue?",
          "why": "AIOps Operational ROI: Catalyst Center AI Network Analytics calculates dynamic, context-aware baselines for throughput, onboarding time, and RF behavior. It alerts engineers only to genuine network anomalies with actionable guided remediation, slashing MTTR by up to 80%.",
          "kind": "choice",
          "choices": [
            "Manual Log Searching in Notepad",
            "Basic ICMP Echo Testing Scripts",
            "Static SNMP Threshold Alarms",
            "Cisco AI Network Analytics (AI Assurance)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. An enterprise IT team managing 600 Catalyst switches needs to deploy a critical security patch across all switches before an upcoming compliance audit. The team cannot risk switch outages from incompatible firmware or corrupted image files. Which Catalyst Center feature validates hardware compatibility, checks flash space, verifies image cryptographic checksums, and orchestrates automated rolling software updates?",
          "why": "Automated Lifecycle Management: SWIM in Catalyst Center establishes verified Golden Images, automates pre-upgrade readiness checks (flash capacity, ASIC compatibility), and coordinates non-disruptive rolling upgrades across switch stacks.",
          "kind": "choice",
          "choices": [
            "Unplugging switch power cords simultaneously",
            "Downloading software images from unverified third-party websites",
            "Software Image Management (SWIM)",
            "Manual file copy to each switch CLI"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. A customer is frustrated by legacy software licensing models that required manual product activation keys (PAKs) and real-time cloud token registrations that caused network switches to enter evaluation mode when WAN links were down. How does Cisco Smart Licensing Using Policy (SLUP) eliminate Day-0 operational friction on Catalyst 9000 switches?",
          "why": "Licensing Simplicity: Smart Licensing Using Policy (SLUP) decouples software licensing from device boot. Hardware runs full feature sets out of the box with zero token registration, reporting usage asynchronously via Cisco Smart Software Manager (CSSM).",
          "kind": "choice",
          "choices": [
            "Licensing requires physical hardware USB security dongles.",
            "Switches boot with full software feature entitlements immediately; license usage reporting is decoupled and synchronized asynchronously via CSSM or Catalyst Center.",
            "Administrators must manually generate license text files after every switch reboot.",
            "Switches halt packet forwarding if not connected to the internet every 24 hours."
          ],
          "answers": [
            1
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. You are presenting a Cisco Enterprise Agreement 3.0 (EA 3.0) proposal to a customer looking to consolidate fragmented switching, wireless, and security licenses into a predictable multi-year commercial contract. Which THREE commercial program benefits of Cisco EA 3.0 should you emphasize to the CFO? (Choose three)",
          "why": "EA 3.0 Commercial Value: Cotermed Single Agreement: Eliminates fragmented renewal dates. True-Forward: Transparent annual growth true-up without retroactive billing fees. Entry Threshold: $100k Net Total Contract Value (TCV) per suite over 3 or 5 years.",
          "kind": "choice",
          "choices": [
            "Mandatory weekly hardware replacement cycles.",
            "A single cotermed anniversary date consolidating all software licenses under one agreement.",
            "True-Forward growth policy providing up to 105% growth allowance without retroactive billing penalties.",
            "Cross-suite financial predictability with a standard minimum entry commitment of $100,000 Net TCV per suite.",
            "Requirement to purchase separate point warranties for every switch port."
          ],
          "answers": [
            1,
            2,
            3
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. A customer is evaluating software subscription tiers for 100 new Catalyst 9300 access switches. The customer requires full SD-Access segmentation, Cisco ISE Base/Plus network access control, and Cisco Secure Network Analytics (Stealthwatch) threat detection. Which software tier bundles DNA Advantage, Cisco ISE, and Secure Network Analytics licenses into a single cost-effective SKU?",
          "why": "Commercial Packaging: DNA Premier is Cisco's comprehensive software bundle. It includes all DNA Advantage capabilities plus Cisco ISE (Base and Plus licenses) and Cisco Secure Network Analytics (Stealthwatch) at a significantly discounted bundled price.",
          "kind": "choice",
          "choices": [
            "Network Essentials Base License",
            "Cisco DNA Advantage (Standalone)",
            "Cisco DNA Essentials",
            "Cisco DNA Premier (Catalyst Premier)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. A financial customer needs external vantage points across the globe to continuously monitor public BGP route leaks, ISP peering degradation, and DNS availability for their online banking portal. Which ThousandEyes agent type provides globally distributed, multi-cloud testing infrastructure maintained directly by Cisco in Tier-1 carrier data centers?",
          "why": "Global Observability: ThousandEyes Cloud Agents are globally deployed across hundreds of cities and Tier-1 ISPs, giving enterprises external vantage points to monitor BGP routing, DNS resolution, and SaaS availability from outside the corporate firewall.",
          "kind": "choice",
          "choices": [
            "Local SNMP Traps",
            "ThousandEyes Enterprise Agents",
            "ThousandEyes Cloud Agents",
            "ThousandEyes Endpoint Agents"
          ],
          "answers": [
            2
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. You are delivering an executive pitch to a CIO who is considering buying separate point products for switching, wireless, SD-WAN, and security from four different vendors. What is the primary executive business justification for adopting a unified Cisco Secure Networking platform architecture?",
          "why": "Executive ROI Pitch: Fragmented point products drive up operational complexity and create security visibility gaps. Cisco Secure Networking converges campus, branch, wireless, and security into a single intelligent platform, reducing OpEx, eliminating vendor sprawl, and accelerating MTTR.",
          "kind": "choice",
          "choices": [
            "Requiring four separate partner support contracts for every incident.",
            "Increasing the number of separate management consoles to create more IT jobs.",
            "Forcing quarterly recabling of all campus buildings.",
            "Significantly lower Total Cost of Ownership (TCO) through platform consolidation, automated end-to-end Zero Trust security, and up to 80% faster issue resolution."
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Customer scenario. An enterprise customer must deploy 500 new Catalyst 9000 switches across regional offices. The Lead Network Engineer wants to ensure that every switch receives certified golden firmware and standardized baseline configurations automatically upon plugging into the network. Which Cisco Catalyst Center automation capability delivers zero-touch switch provisioning via device claiming and template deployment?",
          "why": "Automation Rationale: Catalyst Center Network Plug and Play (PnP) automates Day-0 switch onboarding. Switches boot, discover Catalyst Center via DHCP or PnP Connect, receive verified golden OS images, and execute site configuration templates without manual CLI intervention.",
          "kind": "choice",
          "choices": [
            "Manual console cable CLI scripting",
            "Unencrypted remote scripts",
            "Static file server broadcasts",
            "Network Plug and Play (PnP)"
          ],
          "answers": [
            3
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Match each Cisco Observability & Management Solution to the customer operational challenge it solves:",
          "why": "Why these pairings: Endpoint Agent: Laptop-level Wi-Fi & app diagnostics. Cloud Agent: Global external ISP & BGP path monitoring. AI Assurance: Machine-learned anomaly detection. Meraki Cloud Monitoring: Cloud topology visibility for Catalyst.",
          "kind": "match",
          "pairs": [
            {
              "concept": "ThousandEyes Endpoint Agent",
              "outcome": "Troubleshoots local Wi-Fi, CPU, and SaaS performance directly on hybrid employee laptops."
            },
            {
              "concept": "ThousandEyes Cloud Agent",
              "outcome": "Monitors global BGP routing health, ISP peering bottlenecks, and public DNS resolution."
            },
            {
              "concept": "Catalyst Center AI Assurance",
              "outcome": "Applies machine learning baselines to eliminate static threshold alert fatigue and accelerate MTTR."
            },
            {
              "concept": "Meraki Cloud Monitoring",
              "outcome": "Provides instant cloud dashboard visibility and client diagnostics for Catalyst switches without altering IOS-XE."
            }
          ]
        },
        {
          "domain": "Domain 5: Operations, Cloud Control & Commercials",
          "q": "Match each Cisco Commercial Program & Licensing Term to its financial definition:",
          "why": "Why these pairings: True-Forward: Predictable annual license growth without penalties. DNA Premier: Discounted switching + ISE + Stealthwatch bundle. SLUP: Frictionless Day-0 software enablement. CXEA / LCS: Cisco expert advisory and deployment acceleration. End of answer key. This document mirrors the 60-item HTML simulator (Pearson VUE-style study mode, 90-minute timer, 75% pass line). It is a practice aid, not an official Cisco exam form.",
          "kind": "match",
          "pairs": [
            {
              "concept": "EA 3.0 True-Forward",
              "outcome": "Annual license growth reconciliation with zero retroactive billing fees or surprise back-dated penalties."
            },
            {
              "concept": "DNA Premier Software Bundle",
              "outcome": "Cost-effective software suite bundling DNA Advantage, Cisco ISE, and Secure Network Analytics."
            },
            {
              "concept": "Smart Licensing Using Policy (SLUP)",
              "outcome": "Decouples device boot from token registration, enabling immediate feature access with asynchronous reporting."
            },
            {
              "concept": "CXEA / Lifecycle Services (LCS)",
              "outcome": "Dedicated expert architecture, design validation, and advisory credits to accelerate technology adoption."
            }
          ]
        }
      ]
    }
  ]
};
