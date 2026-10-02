const QUIZ = {
  "sets": [
    {
      "id": 1,
      "day": "Day 1 · Security concepts",
      "title": "Threat landscape",
      "questions": [
        {
          "q": "In the ASNSP threat model, a threat is best described as which of the following?",
          "choices": [
            "Any event with the potential to harm an asset through destruction, disclosure, modification, or denial of service",
            "The remaining chance of loss after patches are applied",
            "A weakness such as a guessable password",
            "The specific tool used to break a control"
          ],
          "answer": 0,
          "why": "The deck defines a threat as a circumstance or event that can harm an asset. A weakness is a vulnerability, and the tool that uses it is an exploit."
        },
        {
          "q": "Weak or easily guessed passwords are classified as what?",
          "choices": [
            "Vulnerabilities",
            "Threats",
            "Mitigations",
            "Exploits"
          ],
          "answer": 0,
          "why": "A vulnerability is a weakness that compromises the security or functionality of a system. The course uses weak passwords as the example."
        },
        {
          "q": "Risk, as used in the security-concepts module, is which statement?",
          "choices": [
            "The act of applying a patch",
            "A packet that fails a checksum",
            "A signature published to detect malware",
            "The likelihood that a threat will exploit a vulnerability and cause an undesirable consequence"
          ],
          "answer": 3,
          "why": "Risk combines a threat, a specific attack, and a vulnerability, and it results in an undesirable consequence. Mitigations such as patches reduce that risk."
        },
        {
          "q": "An attacker uses a SPAN port to copy traffic and steal credentials without changing the packets. Which attack type is this?",
          "choices": [
            "Reflection",
            "Sniffing",
            "Spoofing",
            "Tampering"
          ],
          "answer": 1,
          "why": "Sniffing is passive capture of frames or packets. SPAN misuse and a rogue laptop are the examples in the deck."
        },
        {
          "q": "Traffic crafted to look as if it comes from another IP, MAC, or service, including a rogue DHCP server, is which attack?",
          "choices": [
            "Reconnaissance",
            "Accounting",
            "Spatial multiplexing",
            "Spoofing"
          ],
          "answer": 3,
          "why": "Spoofing hides the real sender or impersonates a trusted system. Rogue DHCP and fake email are service-spoofing examples."
        },
        {
          "q": "ARP poisoning that places an attacker between two hosts so their traffic can be altered is an example of what?",
          "choices": [
            "A port scan",
            "A reflection attack",
            "A man-in-the-middle attack",
            "Physical tapping only"
          ],
          "answer": 2,
          "why": "Man-in-the-middle attacks redirect or poison network behavior. ARP poisoning and IPv6 neighbor-discovery attacks are the cited methods."
        },
        {
          "q": "A command-and-control host directs many compromised systems to exhaust a victim’s bandwidth. What is that called?",
          "choices": [
            "A distributed denial-of-service attack",
            "A single-source denial-of-service attack",
            "GetVPN header preservation",
            "MAC authentication bypass"
          ],
          "answer": 0,
          "why": "DoS comes from one source. DDoS comes from many sources, often a botnet, as shown with the command-and-control picture."
        },
        {
          "q": "Why does a reflection and amplification attacker spoof the victim’s address?",
          "choices": [
            "So DNS, NTP, or ICMP reflectors send their replies to the victim",
            "So MACsec keys are reused on the next hop",
            "So the victim’s router treats the flood as management traffic",
            "So the attack stays inside one VLAN"
          ],
          "answer": 0,
          "why": "The attacker forges the victim as the source. Reflectors answer that address, and small requests can produce large replies."
        },
        {
          "q": "Whois lookups, DNS queries, ping sweeps, and port scans performed before a later intrusion are which activity?",
          "choices": [
            "Stateful inspection",
            "Reconnaissance",
            "Zero-touch provisioning",
            "Accounting"
          ],
          "answer": 1,
          "why": "Reconnaissance collects information so a later attack can be planned. Public records and network probing are the methods named in the module."
        },
        {
          "q": "Inserting a rogue inline device, abusing console or USB access, or entering a wiring closet is classified as what?",
          "choices": [
            "Tampering and tapping",
            "OFDMA",
            "Application-aware routing",
            "Posture assessment"
          ],
          "answer": 0,
          "why": "Tampering and tapping are physical attacks on equipment and media that compromise confidentiality, integrity, or availability."
        }
      ]
    },
    {
      "id": 2,
      "day": "Day 1 · Security concepts",
      "title": "Architecture and Zero Trust",
      "questions": [
        {
          "q": "Confidentiality in the CIA triad means which outcome?",
          "choices": [
            "Information is accessible only to authorized people or systems",
            "Every user is a local administrator",
            "Information has not been improperly modified",
            "Systems remain usable during an outage"
          ],
          "answer": 0,
          "why": "Confidentiality prevents unauthorized access or disclosure. Integrity protects accuracy, and availability keeps services usable."
        },
        {
          "q": "Which statement matches integrity?",
          "choices": [
            "Data and systems stay accurate and are not improperly modified",
            "The WAN is a full mesh",
            "Users authenticate only once per day",
            "Traffic is always encrypted with MACsec"
          ],
          "answer": 0,
          "why": "Integrity safeguards accuracy and prevents adverse modification. Encryption is one control, not the definition of integrity."
        },
        {
          "q": "Defense in depth, as drawn in the module, means what?",
          "choices": [
            "Guest and corporate users share one VLAN",
            "One firewall at the Internet edge is enough",
            "Endpoint, data, and network layers each add protection so a single miss does not expose everything",
            "Encryption replaces identity checks"
          ],
          "answer": 2,
          "why": "The course shows layered controls: endpoints, encrypted data at rest and in transit, and network security."
        },
        {
          "q": "Which summary matches the Zero Trust access picture on the switch?",
          "choices": [
            "Verify explicitly, use least privilege, and assume breach, with continuous checks",
            "Grant full access if 802.1X fails so work continues",
            "Trust the port, then review access weekly",
            "Share one admin password and skip logs"
          ],
          "answer": 0,
          "why": "The slide sequence is verify explicitly, least privilege, and assume breach, plus continuous monitoring."
        },
        {
          "q": "Threat modeling in the architecture section is a systematic way to do what?",
          "choices": [
            "Choose a satellite orbit",
            "Identify critical assets, evaluate threats and vulnerabilities, and plan mitigations",
            "Size a PoE budget",
            "Replace routing with spanning tree"
          ],
          "answer": 1,
          "why": "The deck frames threat modeling as identify and evaluate: assets first, then threats and vulnerabilities."
        },
        {
          "q": "Why are IP addresses and ports no longer enough for security policy?",
          "choices": [
            "Modern applications use dynamic ports, cloud services, encryption, and shared infrastructure",
            "NAT is no longer used anywhere",
            "Firewalls cannot read Layer 3 headers",
            "IPv4 has been fully retired"
          ],
          "answer": 0,
          "why": "The firewall discussion answer says Webex and Microsoft 365 are hard to identify by address and port alone."
        },
        {
          "q": "Which placement best matches IPsec and ARP on the course OSI map?",
          "choices": [
            "Physical layer only",
            "Application layer, with HTTP and SMTP",
            "Presentation layer only",
            "Network layer, with IP and ICMP"
          ],
          "answer": 3,
          "why": "The OSI attack map places IP, ARP, IPsec, and ICMP together at the network layer. TLS sits with TCP and UDP at transport."
        },
        {
          "q": "Ransomware and destructive malware primarily cause which business outcome?",
          "choices": [
            "Faster OSPF convergence",
            "Loss of availability, because systems or data are encrypted or disabled",
            "Lower free-space path loss",
            "Automatic SGT assignment"
          ],
          "answer": 1,
          "why": "The consequences activity lists ransomware under service disruption. Exfiltration is a separate outcome."
        },
        {
          "q": "Security awareness in the architecture discussion is described as what?",
          "choices": [
            "A substitute for firewalls and IPS",
            "Required only for guest wireless",
            "Often overlooked, and improved through education and training, with moderation",
            "The same process as a vulnerability scan"
          ],
          "answer": 2,
          "why": "The slide says awareness is often overlooked, can be overdone, and grows through lectures, videos, and training."
        },
        {
          "q": "A privileged-access design that gives a helpdesk user only the rights needed for that job illustrates which principle?",
          "choices": [
            "Least privilege",
            "Open 802.1X mode",
            "Full-mesh overlay",
            "Channel bonding"
          ],
          "answer": 0,
          "why": "Privileged access management grants only necessary permissions and can keep a read-only user separate from a full admin."
        }
      ]
    },
    {
      "id": 3,
      "day": "Day 1 · Security concepts",
      "title": "Firewalls and IPS",
      "questions": [
        {
          "q": "How does a stateless packet filter differ from a stateful firewall?",
          "choices": [
            "It tracks the connection and allows return traffic for an approved flow",
            "It judges each packet alone using addresses, ports, and protocol",
            "It always decrypts TLS",
            "It identifies applications with NBAR"
          ],
          "answer": 1,
          "why": "A packet filter, such as a router ACL, evaluates packets independently. A stateful firewall allows or blocks based on connection state."
        },
        {
          "q": "In which firewall mode is forwarding based on MAC addresses rather than IP routing?",
          "choices": [
            "StackWise mode",
            "GetVPN mode",
            "Transparent mode",
            "Routed mode"
          ],
          "answer": 2,
          "why": "Routed mode is a Layer 3 firewall. Transparent mode is a Layer 2 firewall."
        },
        {
          "q": "What does a zone represent in a zone-based policy firewall?",
          "choices": [
            "A Wi-Fi channel",
            "A single access-list line",
            "A collection of networks reached through one or more interfaces that share a security grouping",
            "An MPLS transport label"
          ],
          "answer": 2,
          "why": "ZBFW treats a zone as networks reachable over a router interface or a specific set of interfaces, then applies policy between zones."
        },
        {
          "q": "Which capability set distinguishes a next-generation firewall from a traditional address-and-port firewall?",
          "choices": [
            "Only static NAT",
            "Only MAC learning",
            "Application visibility, intrusion prevention, and deeper inspection beyond the 5-tuple",
            "Only spanning-tree root election"
          ],
          "answer": 2,
          "why": "The deck says NGFWs add granular application visibility and other security functions. Traditional firewalls stop at source, destination, and port."
        },
        {
          "q": "Cisco Secure Firewall Threat Defense splits work between which two engines?",
          "choices": [
            "OMP for encryption and NHRP for IPS",
            "LISP for policy and VXLAN for NAT",
            "CAPWAP for routing and GRE for malware",
            "LINA for Layers 1–4 and Snort for threat detection"
          ],
          "answer": 3,
          "why": "LINA handles routing, ACL filtering, and firewall functions. Snort is the detection engine reached through the data acquisition layer."
        },
        {
          "q": "Which order matches the firewall flow in the course?",
          "choices": [
            "Application ID before the packet arrives",
            "Egress, then the packet is parsed",
            "Ingress and parsing, rule match, state handling, NAT, security services, egress",
            "NAT first, then spanning tree, then DNS"
          ],
          "answer": 2,
          "why": "The six steps are ingress and parsing, rule checks, session state, NAT, security services such as IPS, and the egress decision."
        },
        {
          "q": "An inline IPS differs from a passive tap or IDS because it does what?",
          "choices": [
            "Replaces the routing table",
            "Assigns Security Group Tags",
            "Inspects the live traffic path and can drop malicious packets",
            "Only copies traffic and alerts"
          ],
          "answer": 2,
          "why": "Inline IPS sits in the forwarding path and can block. A tap or passive sensor detects without dropping the original flow."
        },
        {
          "q": "Signature-based IPS detection is best described as what?",
          "choices": [
            "Learning a baseline and alerting on any deviation only",
            "Matching known threat patterns",
            "Encrypting the payload with ESP",
            "Counting MAC addresses on a port"
          ],
          "answer": 1,
          "why": "The IPS methods slide separates signature matching of known threats from anomaly or behavioral detection."
        },
        {
          "q": "Where does the course say an IPS has a blind spot?",
          "choices": [
            "Unicast routing updates only",
            "PoE power budgets",
            "Encrypted payloads that it cannot inspect",
            "Console cables"
          ],
          "answer": 2,
          "why": "Encrypted traffic limits inspection. The design note says to combine IPS with firewall policy, DNS intelligence, endpoint telemetry, and SIEM."
        },
        {
          "q": "NGFW design guidance in the module highlights which operational risk?",
          "choices": [
            "Every branch must use the same public IP",
            "Policy complexity grows as rules and exceptions accumulate, and NAT can hide the true endpoints",
            "Application identification lowers CPU in every case",
            "Firewalls remove the need for any logging"
          ],
          "answer": 1,
          "why": "The design-implications slide calls out growing policy complexity and NAT hiding endpoints, plus performance effects from poor rule design."
        }
      ]
    },
    {
      "id": 4,
      "day": "Day 1 · Security concepts",
      "title": "Identity, AAA, and encryption",
      "questions": [
        {
          "q": "In AAA, authorization answers which question?",
          "choices": [
            "Which AP did you roam to?",
            "What did you do?",
            "Who are you?",
            "What are you allowed to do?"
          ],
          "answer": 3,
          "why": "Authentication is identity. Authorization is the allowed access. Accounting records the activity."
        },
        {
          "q": "In wired 802.1X, which device is the authenticator?",
          "choices": [
            "The public certificate authority",
            "The user laptop",
            "The access switch",
            "The identity store such as Active Directory"
          ],
          "answer": 2,
          "why": "The supplicant is the client. The switch or AP is the authenticator. RADIUS or ISE is the authentication server."
        },
        {
          "q": "Why does the course say 802.1X matters at the access edge?",
          "choices": [
            "Devices stay off the network until they authenticate, and policy such as VLAN, ACL, or SGT can be applied per user or device",
            "It replaces DHCP",
            "It bonds 160 MHz channels",
            "It encrypts the WAN by itself"
          ],
          "answer": 0,
          "why": "802.1X blocks unauthenticated devices and enables per-user or per-device segmentation, which limits lateral movement."
        },
        {
          "q": "Which Wi-Fi enterprise authentication option uses certificates rather than only a shared password?",
          "choices": [
            "802.1X",
            "A single pre-shared key for every device",
            "MAC authentication with no server",
            "Open authentication with no protection"
          ],
          "answer": 0,
          "why": "The Wi-Fi authentication slide lists 802.1X with certificates alongside PSK, open, and web authentication, which rely on passwords or a MAC identifier."
        },
        {
          "q": "What is the role of an identity provider in single sign-on?",
          "choices": [
            "It selects a Wi-Fi channel",
            "It validates the user once and issues a token so approved applications do not each ask for a password",
            "It builds IPsec tunnels between branches",
            "It assigns MPLS labels"
          ],
          "answer": 1,
          "why": "SSO is one login for many applications. A trusted identity provider authenticates the user and the browser presents a token to each app."
        },
        {
          "q": "MACsec, IEEE 802.1AE, protects traffic in which way?",
          "choices": [
            "It encrypts IP packets end to end across any routed network",
            "It encrypts Ethernet frames hop by hop on a single link",
            "It encrypts only the application payload, as TLS does",
            "It hides SSIDs from clients"
          ],
          "answer": 1,
          "why": "MACsec is Layer 2, link by link, and fits campus or data-center links and WAN Ethernet. IPsec is the Layer 3 tunnel."
        },
        {
          "q": "Which IPsec choice provides encryption and integrity and is the usual selection?",
          "choices": [
            "AH",
            "ESP",
            "ARP",
            "OFDM"
          ],
          "answer": 1,
          "why": "ESP provides encryption and integrity. AH provides integrity only and is rarely used."
        },
        {
          "q": "How do symmetric and asymmetric encryption differ in the course?",
          "choices": [
            "Asymmetric is only used for Wi-Fi beacons",
            "Symmetric uses one shared secret and is fast for bulk data; asymmetric uses a public and private key pair",
            "Symmetric requires a certificate for every packet; asymmetric uses no keys",
            "They are two names for MACsec"
          ],
          "answer": 1,
          "why": "Symmetric encryption uses one shared key. Asymmetric encryption uses a key pair for exchange and identity. Key exchange often wraps a symmetric session key."
        },
        {
          "q": "TLS protects traffic in which scope?",
          "choices": [
            "Only inside one VRF",
            "Between applications, such as a browser and a server, regardless of the network path",
            "Only on the first Ethernet hop",
            "Only on the wireless backhaul radio"
          ],
          "answer": 1,
          "why": "TLS is application-layer, end-to-end protection for HTTPS, APIs, and SaaS, even if the path is untrusted."
        },
        {
          "q": "“Harvest now, decrypt later” refers to which risk?",
          "choices": [
            "An attacker records encrypted sessions today and decrypts them later if a quantum computer breaks RSA, Diffie-Hellman, or elliptic-curve methods",
            "A switch stack loses its master during an upgrade",
            "LEO satellites replace GEO latency",
            "Guest traffic is bridged into the corporate VLAN"
          ],
          "answer": 0,
          "why": "The quantum slides say today’s public-key methods can fall, so recorded traffic is a future disclosure risk. The suggested path is crypto agility and hybrid post-quantum transition."
        }
      ]
    },
    {
      "id": 5,
      "day": "Day 2 · WAN",
      "title": "Physical access",
      "questions": [
        {
          "q": "WAN access technologies such as xDSL, cable, fiber, cellular, and satellite sit primarily at which layers?",
          "choices": [
            "Layers 5 and 6 only",
            "Layers 1 and 2",
            "The MPLS control plane only",
            "The application layer only"
          ],
          "answer": 1,
          "why": "The OSI mapping slide says these access technologies define how bits and frames cross the last mile."
        },
        {
          "q": "The demarcation point separates which two domains?",
          "choices": [
            "Customer premises equipment and the service provider’s equipment",
            "A VRF and a VLAN",
            "The campus core and the access closet",
            "The supplicant and the authenticator"
          ],
          "answer": 0,
          "why": "The enterprise edge meets the provider edge at the demarc. The modem or handoff is the boundary."
        },
        {
          "q": "Which statement matches xDSL in the course?",
          "choices": [
            "It is a low-earth-orbit constellation",
            "It requires an amplifier about every 500 meters on coaxial cable",
            "It is a passive optical splitter design",
            "It uses the telephone line, speeds are asymmetric, and distance and line quality matter"
          ],
          "answer": 3,
          "why": "xDSL rides the phone line through a DSLAM. Cable is the coaxial last-mile technology with amplifiers."
        },
        {
          "q": "Which description matches cable access in the deck?",
          "choices": [
            "Coaxial last mile, amplifiers about every 500 meters, and asymmetric speeds",
            "Wi-Fi 7 multi-link operation",
            "A private TDM circuit with symmetric guaranteed bandwidth",
            "Single-mode fiber to a passive splitter"
          ],
          "answer": 0,
          "why": "The cable slide cites coaxial last-mile access, amplifiers, and example speeds up to about 500 Mbps down and 50 Mbps up."
        },
        {
          "q": "In a passive optical network, where does the optical line terminal sit?",
          "choices": [
            "Inside the Starlink router",
            "In every guest hotel room",
            "At the provider central office, aggregating the PON",
            "On the campus core supervisor"
          ],
          "answer": 2,
          "why": "The OLT terminates the PON at the central office. ONTs or ONUs sit at the customer premises. A splitter shares the fiber."
        },
        {
          "q": "How does the course contrast passive and active optical access?",
          "choices": [
            "Both are wireless-only",
            "Passive networks always have higher latency than GEO satellite",
            "Passive optical networks reach about 20 km at 1–10 Gbps; active optical networks reach beyond 100 km and up to hundreds of Gbps",
            "Active networks cannot carry voice"
          ],
          "answer": 2,
          "why": "The FTTX slide gives those reach and speed ranges and says fiber is how providers deploy new fixed access."
        },
        {
          "q": "Which customer situations does the course associate with GPON-style fiber?",
          "choices": [
            "Only satellite backhaul",
            "Only inter-data-center dark fiber at 400 Gbps",
            "Service providers, hotels and resorts, and verticals such as hospitality, healthcare, and education",
            "Only MPLS P routers"
          ],
          "answer": 2,
          "why": "GPON is positioned for cost-efficient multi-subscriber access and for campuses, hotels, healthcare, and education."
        },
        {
          "q": "Cellular access is presented as a strong fit for which uses?",
          "choices": [
            "A metered backup path, or a primary path for a temporary site such as a pop-up shop",
            "An unmetered full-mesh core",
            "A replacement for MACsec on every campus uplink",
            "A Layer 2 data-center interconnect"
          ],
          "answer": 0,
          "why": "Cellular is metered, coverage-sensitive, commonly a secondary line, and often the primary line for pop-up locations."
        },
        {
          "q": "How do LEO and GEO satellite services compare in the deck?",
          "choices": [
            "LEO is on the order of 20 ms and hundreds of Mbps down; GEO is about 600 ms with lower typical throughput",
            "LEO cannot be used as enterprise access",
            "Both present the same latency as metro fiber",
            "GEO is always faster and lower latency"
          ],
          "answer": 0,
          "why": "Starlink and OneWeb are the LEO examples. Viasat and HughesNet illustrate high-latency GEO service."
        },
        {
          "q": "When a branch moves from 100 Mbps to 1 Gbps access, what does the platform-selection discussion conclude?",
          "choices": [
            "Security features can be removed because the circuit is faster",
            "Speed alone does not size the router; traffic demand, growth, and enabled services still matter",
            "The router must be replaced automatically",
            "Only the firewall model must change"
          ],
          "answer": 1,
          "why": "The activity answer says historical WAN speed is no longer the only sizing input."
        }
      ]
    },
    {
      "id": 6,
      "day": "Day 2 · WAN",
      "title": "Services, VPNs, and MPLS",
      "questions": [
        {
          "q": "In the course, the underlay answers which question?",
          "choices": [
            "Which SGT to assign a user",
            "Which tenant or VRF should handle the packet after it arrives",
            "Which QAM constellation to use",
            "How sites reach each other and which path traffic takes through the network"
          ],
          "answer": 3,
          "why": "The underlay is reachability and path. The overlay decides tenant, VRF, or service once the packet is at the far edge."
        },
        {
          "q": "A Layer 2 VPN service makes the provider network look like what to the enterprise?",
          "choices": [
            "An identity provider",
            "A logical switch",
            "A stateful firewall",
            "A logical router that exchanges BGP routes"
          ],
          "answer": 1,
          "why": "Layer 2 VPNs extend Ethernet. Layer 3 VPNs make the underlay look like a logical router."
        },
        {
          "q": "E-Line, pseudowire, and VPWS are provider terms for which design?",
          "choices": [
            "Point-to-point Layer 2 VPN",
            "Multipoint Layer 3 MPLS VPN",
            "StackWise Virtual",
            "Remote browser isolation"
          ],
          "answer": 0,
          "why": "Point-to-point Layer 2 uses those names. VPLS, EVPN, and E-LAN describe multipoint Layer 2."
        },
        {
          "q": "Why does the course pair GRE with IPsec for classic site-to-site routing?",
          "choices": [
            "IPsec cannot cross the Internet",
            "IPsec secures the traffic but does not carry multicast and broadcasts that routing protocols need",
            "GRE assigns Security Group Tags",
            "GRE replaces encryption"
          ],
          "answer": 1,
          "why": "The VPN slide says IPsec does not support multicast or broadcasts, which breaks routing protocols unless GRE is added."
        },
        {
          "q": "Which classic VPN fits a large branch design that needs dynamic spoke-to-spoke tunnels over the Internet?",
          "choices": [
            "DMVPN",
            "GETVPN on a private WAN",
            "Remote browser isolation",
            "A manually configured tunnel per pair of sites"
          ],
          "answer": 0,
          "why": "The best-fit table maps DMVPN to branch hub-and-spoke with dynamic spoke-to-spoke tunnels. Manual tunnels fit a few static sites."
        },
        {
          "q": "GETVPN is the best fit when the customer needs what?",
          "choices": [
            "Group encryption on an existing private WAN without building an overlay, while preserving the original IP header",
            "Per-application SaaS probing",
            "Wireless location surveys",
            "A brand-new public Internet overlay for three sites"
          ],
          "answer": 0,
          "why": "GETVPN uses group IPsec, does not build an overlay, and keeps the IP header, which helps QoS, traffic engineering, and multicast."
        },
        {
          "q": "FlexVPN is distinguished in the deck by which trait?",
          "choices": [
            "Tunnel-less encryption that preserves the original header on MPLS",
            "One IKEv2 framework for site-to-site, hub-and-spoke, and spoke-to-spoke",
            "SD-WAN control connections only",
            "A single static tunnel with no routing"
          ],
          "answer": 1,
          "why": "FlexVPN is the modern IKEv2 framework for several topologies. GETVPN is the tunnel-less private-WAN option."
        },
        {
          "q": "What does a VRF give a provider or a large enterprise?",
          "choices": [
            "Layer 2 encryption on one hop",
            "A separate routing table so customers or segments can overlap addresses and stay isolated",
            "A Wi-Fi basic service set",
            "A shared global table for every customer"
          ],
          "answer": 1,
          "why": "Each VRF acts as its own Layer 3 network. The same prefixes can exist in different VRFs without conflict."
        },
        {
          "q": "On an MPLS path, a P router forwards a packet based on what?",
          "choices": [
            "The original destination IP only",
            "The Ethernet source MAC only",
            "The TLS certificate",
            "The MPLS label, without inspecting the IP header"
          ],
          "answer": 3,
          "why": "The MPLS header slide says the P router uses the label. PE routers impose and dispose of labels at the edge."
        },
        {
          "q": "Why might an enterprise that already owns its WAN still use MPLS?",
          "choices": [
            "Because Internet DIA cannot carry IP",
            "Control, deterministic latency, security and compliance, and legacy OT integration",
            "Because VRFs do not work on private fiber",
            "Because MPLS is required for every SaaS application"
          ],
          "answer": 1,
          "why": "The discussion answer lists control and independence, latency and determinism, security and compliance, and legacy OT."
        }
      ]
    },
    {
      "id": 7,
      "day": "Day 2 · WAN",
      "title": "Catalyst SD-WAN",
      "questions": [
        {
          "q": "SD-WAN, as defined in the course, changes the WAN by doing what?",
          "choices": [
            "Decoupling the data, control, and management planes and steering applications over multiple transports with centralized policy",
            "Forcing every flow through one static route",
            "Removing encryption from branch traffic",
            "Replacing IP with spanning tree"
          ],
          "answer": 0,
          "why": "The definition is an SDN-style WAN: separated planes, a secure overlay, and application steering from centralized policy."
        },
        {
          "q": "In the Catalyst SD-WAN picture, which component is the management plane?",
          "choices": [
            "Controller",
            "WAN Edge",
            "Manager",
            "Validator"
          ],
          "answer": 2,
          "why": "Manager is the single pane for day-0, day-1, and day-2. Controllers distribute control and policy. The validator is the first authentication point. Edges forward data."
        },
        {
          "q": "OMP runs in which role?",
          "choices": [
            "A TCP control protocol between WAN Edges and Controllers, inside authenticated TLS or DTLS",
            "The data-plane cipher that encrypts user packets",
            "The satellite handoff protocol",
            "A Layer 2 discovery protocol on the LAN"
          ],
          "answer": 0,
          "why": "OMP advertises routes, TLOCs, and policy between edges and controllers and between controllers, inside TLS or DTLS."
        },
        {
          "q": "How does Catalyst SD-WAN keep segments separate on the data plane?",
          "choices": [
            "Segmentation requires the underlay to understand every VLAN",
            "Guest traffic is sent in the clear",
            "All users share one global routing table",
            "Each VPN or VRF keeps its own table, and packets carry a label inside IPsec"
          ],
          "answer": 3,
          "why": "The data-plane slide shows per-VPN tables and an IPsec packet with a label so segmentation does not depend on the underlay."
        },
        {
          "q": "Application-aware routing chooses a path using which kind of information?",
          "choices": [
            "The access-switch stack priority",
            "The lowest interface number only",
            "The alphabetical order of provider names",
            "Measured loss, latency, and jitter against an application SLA"
          ],
          "answer": 3,
          "why": "The example compares paths such as 10 ms and 1 percent loss versus 200 ms and 3 percent loss, then pins the application to a compliant path."
        },
        {
          "q": "Zero-touch provisioning for an SD-WAN edge uses which onboarding path?",
          "choices": [
            "DHCP and DNS from the ISP to reach the PnP server, then an automatic join to the fabric",
            "An on-site USB image with no certificates",
            "A technician pasting a full configuration at every site",
            "A manual GRE tunnel built before the device boots"
          ],
          "answer": 0,
          "why": "The ZTP example uses PnP, ISP DHCP and DNS, and then secure bring-up into the IPsec fabric."
        },
        {
          "q": "Multi-Region Fabric is used to do what?",
          "choices": [
            "Group sites, such as by geography, and restrict overlay tunnels between regions",
            "Disable OMP between controllers",
            "Replace IPsec with MACsec on the LAN",
            "Stretch one VLAN across every country"
          ],
          "answer": 0,
          "why": "MRF lets you define regions, keep topologies different per region, and avoid a full mesh of overlay tunnels between distant sites."
        },
        {
          "q": "Why might a customer keep MPLS after deploying SD-WAN?",
          "choices": [
            "Cellular cannot be a backup",
            "MPLS can still offer predictable performance, an SLA, and low latency for traffic that needs it",
            "Internet circuits are illegal for enterprise use",
            "SD-WAN cannot forward traffic unless MPLS is present"
          ],
          "answer": 1,
          "why": "The transport-strategy answer says MPLS may remain for predictability and SLAs. Internet is often enough for general SaaS, and cellular fits rapid or backup sites."
        },
        {
          "q": "Cloud onRamp for SaaS at a remote site improves Office 365 or Webex by doing what?",
          "choices": [
            "Disabling TLS so the path looks faster",
            "Backhauling all SaaS through the data center by policy",
            "Probing application quality out of each local Internet exit and steering to the better path",
            "Pinning every application to LTE"
          ],
          "answer": 2,
          "why": "The DIA onRamp example probes selected SaaS applications on each local exit and uses the better-performing circuit."
        },
        {
          "q": "On-box SD-WAN security called out in the module includes which set?",
          "choices": [
            "URL filtering, Cisco Umbrella, and Advanced Malware Protection with file reputation",
            "Only spanning tree",
            "Only static host routes",
            "Only wireless rogue detection"
          ],
          "answer": 0,
          "why": "The on-box security slide lists URL categories and reputation, Umbrella, and AMP with reputation and sandboxing."
        }
      ]
    },
    {
      "id": 8,
      "day": "Day 2 · WAN",
      "title": "SD-Routing and Segment Routing",
      "questions": [
        {
          "q": "Which component is present in a Catalyst SD-WAN deployment and absent from SD-Routing?",
          "choices": [
            "The SD-WAN Manager",
            "The SD-WAN Validator",
            "The SD-WAN Controller",
            "The WAN edge hardware"
          ],
          "answer": 2,
          "why": "The architecture comparison shows Manager and Validator in both, and states that the SD-WAN Controller is not included for SD-Routing."
        },
        {
          "q": "SD-Routing is aimed at which customer?",
          "choices": [
            "A customer who wants to keep DMVPN, FlexVPN, GETVPN, or MPLS VPN and add centralized management",
            "A customer replacing the campus with BGP-EVPN",
            "A customer who only needs OpenRoaming",
            "A customer who already needs a full SD-WAN overlay and application-aware steering"
          ],
          "answer": 0,
          "why": "SD-Routing keeps classic routed VPNs and adds Manager-based operations without forcing an SD-WAN migration."
        },
        {
          "q": "A customer already on SD-WAN wants the same operational model for remaining Internet-edge routers. What does the customer-journey answer recommend?",
          "choices": [
            "Rip out SD-WAN and return to static tunnels",
            "Keep SD-WAN and bring the remaining devices under the same centralized management",
            "Disable certificates on the validator",
            "Move those routers to GEO satellite only"
          ],
          "answer": 1,
          "why": "Customer A stays on SD-WAN and extends the same management to devices that are not yet in the fabric."
        },
        {
          "q": "Segment Routing chooses a path in which way?",
          "choices": [
            "The destination rewrites the path at every hop",
            "The source encodes an ordered list of segments in the packet",
            "A SPAN port copies the packet to a controller for each hop",
            "Every router independently floods a full traffic-engineering database and picks the next hop with no source instruction"
          ],
          "answer": 1,
          "why": "Segment Routing is source routing. Segments are instructions, such as a node or an adjacency, carried in the header."
        },
        {
          "q": "A Node-SID differs from an Adj-SID because a Node-SID does what?",
          "choices": [
            "Identifies a router in the network, while an Adj-SID identifies a local link on that router",
            "Encrypts the payload",
            "Identifies a VLAN on an access port",
            "Replaces the need for any IGP"
          ],
          "answer": 0,
          "why": "Each node has a unique Node-SID. An Adj-SID has local significance for a link. Combining them steers traffic onto a specific path."
        },
        {
          "q": "Topology Independent LFA in the Segment Routing section is meant to provide what?",
          "choices": [
            "A new public-key algorithm",
            "About 50 ms protection for links, nodes, and shared-risk groups without waiting for full IGP convergence",
            "Guest wireless onboarding",
            "PoE perpetual power"
          ],
          "answer": 1,
          "why": "TI-LFA is the fast-reroute mechanism described as 100 percent coverage and 50-millisecond protection."
        },
        {
          "q": "SR-MPLS and SRv6 are which pair?",
          "choices": [
            "A firewall mode and an IPS mode",
            "Two names for GETVPN",
            "A wireless deployment and a satellite orbit",
            "Two data-plane ways to carry the same Segment Routing instructions, one with MPLS labels and one with IPv6 addresses"
          ],
          "answer": 3,
          "why": "The course presents one architecture with two instantiations: SID as an MPLS label, or SID as an IPv6 prefix."
        },
        {
          "q": "What operational problem does Segment Routing claim to reduce in a traditional MPLS core?",
          "choices": [
            "The need for any redundancy",
            "The number of protocols needed for transport, VPNs, and traffic engineering",
            "The need for IP addressing",
            "Encryption strength"
          ],
          "answer": 1,
          "why": "The evolution slides collapse LDP, RSVP-TE, and extra control protocols into an IGP with Segment Routing extensions."
        },
        {
          "q": "A brownfield customer says the MPLS WAN already works. Which problem can still justify a Segment Routing conversation?",
          "choices": [
            "Operational complexity, slow change, and difficult troubleshooting even though traffic is flowing",
            "The network cannot forward IPv4",
            "MPLS cannot isolate customers",
            "Fiber cannot carry Ethernet"
          ],
          "answer": 0,
          "why": "The activity answer says a working network can still be costly to operate, troubleshoot, and change."
        },
        {
          "q": "A retailer with about 150 branches, mixed MPLS and broadband, and growing SaaS is pointed toward which WAN direction in the module wrap-up?",
          "choices": [
            "Manual tunnels at every branch",
            "GETVPN with no Internet exits",
            "A single Layer 2 domain across all countries",
            "SD-WAN, so policy can use both transports and send cloud traffic on a better path"
          ],
          "answer": 3,
          "why": "The growing-retail scenario is the SD-WAN example: many branches, mixed transports, and cloud applications."
        }
      ]
    },
    {
      "id": 9,
      "day": "Day 3 · Routing security",
      "title": "Router security building blocks",
      "questions": [
        {
          "q": "Why has the branch router become a larger enforcement point?",
          "choices": [
            "MPLS labels replaced the need for policy",
            "All SaaS traffic is now unencrypted",
            "Local Internet breakout bypasses the central security stack, and IoT plus encrypted traffic reduce visibility",
            "Branch routers no longer forward packets"
          ],
          "answer": 2,
          "why": "Direct Internet, cloud access, guests, and unmanaged devices show up first at the WAN edge. The router has to segment, enforce, and export telemetry."
        },
        {
          "q": "Cisco Secure Boot checks the boot chain using which hardware root?",
          "choices": [
            "A public DNS resolver",
            "An MPLS P router",
            "The wireless LAN controller",
            "The Trust Anchor module"
          ],
          "answer": 3,
          "why": "The secure-boot sequence starts at the Trust Anchor, which checks the microloader, bootloader, and operating system before the image is trusted."
        },
        {
          "q": "Zone-based firewall policy on a router is applied between what?",
          "choices": [
            "Individual Wi-Fi resource units",
            "StackWise cables",
            "MPLS traffic-engineering tunnels only",
            "Security zones, using class maps to match traffic and policy maps to pass, inspect, or drop it"
          ],
          "answer": 3,
          "why": "The operation slide is class-map, policy-map, then zone-pair. Zones are applied to interfaces."
        },
        {
          "q": "Enterprise firewall with application awareness adds which recognition to ZBFW?",
          "choices": [
            "A new spanning-tree mode",
            "NBAR recognition of more than 1,500 Layer 7 applications",
            "LEO satellite tracking",
            "UWB time-of-flight"
          ],
          "answer": 1,
          "why": "NBAR lets the router allow or block by application, category, family, or group rather than only ports."
        },
        {
          "q": "The router next-generation firewall in this module combines application-aware ZBFW with which engine?",
          "choices": [
            "Unified Threat Defense, including IPS, malware protection, and URL filtering",
            "A private VLAN",
            "LISP mapping only",
            "OFDM only"
          ],
          "answer": 0,
          "why": "UTD adds Snort IPS, AMP, URL filtering, TLS decryption, and identity-aware policy."
        },
        {
          "q": "Snort signature sets on the router are described as which three postures?",
          "choices": [
            "Hub, spoke, and mesh",
            "2.4, 5, and 6 GHz",
            "Open, closed, and monitor for 802.1X",
            "Connectivity over security, balanced, and security over connectivity"
          ],
          "answer": 3,
          "why": "Those three signature-set levels trade inspection depth against connectivity. Talos updates can be pushed by the SD-WAN Manager."
        },
        {
          "q": "A URL reputation score of 90 is classified as what?",
          "choices": [
            "High risk",
            "Trustworthy",
            "Suspicious",
            "Moderate risk"
          ],
          "answer": 1,
          "why": "The BrightCloud scale is 1–20 high risk, 21–40 suspicious, 41–60 moderate, 61–80 low risk, and 81–100 trustworthy."
        },
        {
          "q": "Why does the TLS proxy discussion matter on a branch router?",
          "choices": [
            "TLS removed the need for any firewall",
            "Certificates replace zones",
            "More than 90 percent of Internet traffic is encrypted, so inspection needs a controlled decrypt and has a performance cost",
            "Decryption makes the router faster in every case"
          ],
          "answer": 2,
          "why": "The slide says malware hides in encrypted traffic and selective decryption is the practical compromise."
        },
        {
          "q": "Advanced malware protection on the router is described as using which functions?",
          "choices": [
            "Only channel bonding",
            "Only a static ACL",
            "Only MAC authentication bypass",
            "File reputation, retrospection, and analysis through Cisco Malware Analytics"
          ],
          "answer": 3,
          "why": "AMP covers reputation and retrospection, with Threat Grid analysis, on protocols such as HTTP and SMTP when decryption is available."
        },
        {
          "q": "WAN MACsec is positioned for which outcome?",
          "choices": [
            "Line-rate Layer 2 encryption over public Ethernet transport, including multipoint topologies",
            "Replacing 802.1X on access ports",
            "Guest captive portal",
            "Per-application SaaS steering"
          ],
          "answer": 0,
          "why": "WAN MACsec extends 802.1AE across carrier Ethernet for high-speed links such as data-center interconnect, at line rate."
        }
      ]
    },
    {
      "id": 10,
      "day": "Day 3 · Routing security",
      "title": "Cloud security services",
      "questions": [
        {
          "q": "Security Service Edge is best described as what?",
          "choices": [
            "An MPLS label-distribution protocol",
            "Cloud-delivered security for web, cloud services, and private applications",
            "A Wi-Fi site survey",
            "A campus stacking protocol"
          ],
          "answer": 1,
          "why": "SSE is delivered primarily from the cloud and typically includes secure web gateway, CASB, and zero trust network access functions."
        },
        {
          "q": "A cloud-delivered firewall, or firewall-as-a-service, adds which coverage beyond a secure web gateway?",
          "choices": [
            "Only wireless rogue containment",
            "Only HTTP category filtering",
            "Only badge-reader onboarding",
            "Layer 3 and 4 controls and non-web Internet access, plus IPS and application control"
          ],
          "answer": 3,
          "why": "The CDFW picture shows ports 80 and 443 on the secure web gateway and non-web traffic handled by the cloud firewall."
        },
        {
          "q": "Which functions does the course list for a secure web gateway?",
          "choices": [
            "MPLS traffic engineering",
            "StackWise Virtual dual-active detection",
            "PON split ratios",
            "URL filtering, reputation, TLS inspection, malware sandboxing, and remote browser isolation"
          ],
          "answer": 3,
          "why": "The SWG slide stacks those web-security controls in the cloud proxy path."
        },
        {
          "q": "Why is full SSL decryption called out as an operational concern?",
          "choices": [
            "It replaces identity",
            "It is required on every packet or the proxy fails closed with no alternative",
            "It removes malware with no performance cost",
            "It is resource intensive, so it should be applied selectively"
          ],
          "answer": 3,
          "why": "The SWG performance slide says decryption is expensive. The router TLS discussion makes the same point about selective decryption."
        },
        {
          "q": "A CASB tenant control is used to do what?",
          "choices": [
            "Build spoke-to-spoke GRE tunnels",
            "Select a Node-SID",
            "Allow the corporate Microsoft 365 instance and block personal instances",
            "Assign PoE budgets"
          ],
          "answer": 2,
          "why": "The example distinguishes the corporate tenant from personal tenants and can limit the choice to groups of users."
        },
        {
          "q": "CASB discovery of third-party apps is aimed at which problem?",
          "choices": [
            "Hidden-node collisions on Wi-Fi",
            "Supervisor failover",
            "OAuth grants that let unreviewed extensions into the Microsoft 365 tenant",
            "Overlapping MPLS labels"
          ],
          "answer": 2,
          "why": "The slide covers visibility into third-party applications and plug-ins granted access through OAuth."
        },
        {
          "q": "Zero Trust Network Access replaces a full-tunnel VPN with what?",
          "choices": [
            "Unrestricted access to the whole private network",
            "A Layer 2 broadcast domain for remote users",
            "A shared pre-shared key for every application",
            "Per-application access after the user, device, and context are checked"
          ],
          "answer": 3,
          "why": "ZTNA verifies identity and context, then opens only the approved application. It can be client-based or clientless."
        },
        {
          "q": "Why is DNS-layer security described as an early control?",
          "choices": [
            "DNS only works for data-center servers",
            "DNS replaces TLS",
            "DNS is the first step for almost every Internet connection, before the file runs or the IP session starts",
            "DNS cannot be answered with a block page"
          ],
          "answer": 2,
          "why": "The slide says a safe request returns the real address and a malicious request can return a block page."
        },
        {
          "q": "How do the two DLP deployment methods differ?",
          "choices": [
            "API DLP blocks non-web traffic at Layer 4",
            "Real-time DLP inspects web traffic in the secure web gateway; API DLP inspects sanctioned SaaS through cloud APIs",
            "Both methods only scan tape backups",
            "Real-time DLP cannot see unsanctioned applications"
          ],
          "answer": 1,
          "why": "Inline SWG DLP covers sanctioned and unsanctioned web use. API DLP is for data already in the cloud application."
        },
        {
          "q": "Remote browser isolation protects the endpoint by doing what?",
          "choices": [
            "Disabling all Internet access",
            "Running the web session in a cloud browser and streaming a rendered result so active content does not execute locally",
            "Replacing 802.1X",
            "Caching every file on the laptop"
          ],
          "answer": 1,
          "why": "RBI is for risky or unknown sites. The user sees rendered content instead of running the site’s code."
        }
      ]
    },
    {
      "id": 11,
      "day": "Day 3 · Routing security",
      "title": "Where WAN security sits",
      "questions": [
        {
          "q": "Why does the course say an account team should be ready to discuss more than one WAN security architecture?",
          "choices": [
            "Every enterprise still sends all traffic only between the branch and headquarters, so one firewall model covers every account",
            "Colocation, direct Internet access, and SASE are three names for the same backhaul design",
            "Internet, SaaS, and cloud access changed where traffic goes, so security may sit centrally, at the branch, or in the cloud, and the choice balances security, performance, cost, and operations",
            "The architectures differ only by which Wi-Fi band the branch uses"
          ],
          "answer": 2,
          "why": "The module says traffic no longer flows only between branch and headquarters, and each architecture has its own tradeoffs."
        },
        {
          "q": "In the centralized firewall architecture, where is most branch traffic inspected?",
          "choices": [
            "At a central site, after the branch sends it back, and before it goes to the Internet or to shared resources",
            "On the guest SSID of the local access point",
            "On every branch firewall, with no traffic returning to headquarters",
            "Only at a cloud point of presence, with no data-center stack"
          ],
          "answer": 0,
          "why": "The picture sends branch traffic, and usually remote-user VPN, to a central firewall stack. The branch edge can stay relatively simple."
        },
        {
          "q": "Which customer is the best fit for a centralized firewall, as the course describes that fit?",
          "choices": [
            "A 150-store retailer whose traffic is mostly Microsoft 365 and Salesforce",
            "A regulated organization whose important applications still live in the data center and that values consistent control more than local SaaS performance",
            "A branch that must inspect Internet traffic locally while the hub is unreachable",
            "A design whose only goal is the lowest latency to the nearest SaaS front door"
          ],
          "answer": 1,
          "why": "The best-fit slide names financial or highly regulated organizations, data-center-hosted applications, and customers early in a move to cloud services."
        },
        {
          "q": "Which drawback belongs to the centralized firewall model?",
          "choices": [
            "Each branch must size and patch its own next-generation firewall",
            "Policy is different at every site because there is no shared stack",
            "Backhaul adds latency, consumes WAN bandwidth, and scales poorly as Internet and SaaS traffic grow",
            "Remote users can reach private applications only through clientless ZTNA"
          ],
          "answer": 2,
          "why": "Drawbacks include latency, a poorer SaaS experience, bandwidth use, hub dependency, and remote-user protection only with an always-on full tunnel."
        },
        {
          "q": "A security stack in colocation is best described as what?",
          "choices": [
            "Tunnel-less group encryption that preserves the original IP header",
            "Identity-based micro-segmentation inside a single VLAN",
            "A regional or shared inspection hub in an external facility, closer to branches and cloud than a distant headquarters, which can also terminate remote-user VPNs",
            "Local Internet breakout with no shared inspection point"
          ],
          "answer": 2,
          "why": "Colocation hosts the security services as an external hub. Large organizations use several regional hubs between branch, cloud, Internet, and private applications."
        },
        {
          "q": "Compared with hauling all traffic to a distant data center, what benefit does the course give a colocation security stack?",
          "choices": [
            "Removal of every on-premises tool and of any dependency on the colocation or transport provider",
            "Better performance than long-distance backhaul, plus geographic scale for hybrid inspection",
            "Automatic replacement of the private WAN by ZTNA",
            "The same user experience as direct Internet access, with no traffic detour"
          ],
          "answer": 1,
          "why": "Colocation is still a detour compared with DIA, but it is closer than a far headquarters and can improve resiliency by spreading hubs."
        },
        {
          "q": "How does the course define direct Internet access?",
          "choices": [
            "A replacement for 802.1X on the access port",
            "A wireless mesh backhaul between buildings",
            "A requirement that every flow be inspected on one central firewall",
            "A breakout model in which selected Internet-bound branch traffic leaves locally. It is not a complete security architecture by itself"
          ],
          "answer": 3,
          "why": "DIA improves the path for SaaS and web traffic. The course says it is commonly paired with branch security, cloud security, or both, and is tied to SD-WAN."
        },
        {
          "q": "Which security pairing does the course expect when a branch uses direct Internet access?",
          "choices": [
            "A private VLAN on the campus core and nothing at the branch",
            "No inspection, because SaaS traffic is already encrypted",
            "GETVPN with no Internet exit",
            "Local branch security, cloud-delivered security, or both"
          ],
          "answer": 3,
          "why": "Once traffic bypasses the central stack, new controls have to cover it. DIA alone does not decide policy, visibility, or compliance."
        },
        {
          "q": "Which outcome is a stated benefit of direct Internet access?",
          "choices": [
            "One security stack and no new controls at the branch or in the cloud",
            "Removal of any need to choose which applications break out",
            "Lower latency and a better experience for cloud applications, with less traffic hauled to the data center",
            "The same visibility as a design in which every flow passes the central firewall"
          ],
          "answer": 2,
          "why": "Benefits are latency, user experience for applications such as Office 365, less backhaul, lower WAN cost, and a model that scales for cloud-first traffic."
        },
        {
          "q": "Which design question belongs in a direct Internet access conversation?",
          "choices": [
            "Which Security Group Tag to assign a printer",
            "Which traffic should break out, what must be inspected before it does, and whether cloud or branch security is already in place",
            "How many non-overlapping channels the warehouse has in 2.4 GHz",
            "Whether the campus core should run StackWise Virtual"
          ],
          "answer": 1,
          "why": "The fit slide asks which traffic and which users break out locally, what security happens first, and whether the customer can support that breakout."
        }
      ]
    },
    {
      "id": 12,
      "day": "Day 3 · Routing security",
      "title": "SSE, SASE, and ZTNA",
      "questions": [
        {
          "q": "What does the course mean by firewalls everywhere?",
          "choices": [
            "Each branch has local firewalling, so traffic can be inspected at the site before it goes to the Internet, the cloud, or the WAN",
            "Only the data center has a firewall, and every branch stays a simple router",
            "Security exists only as a cloud web proxy, with no branch policy",
            "Guest and corporate users share one VLAN and one access list"
          ],
          "answer": 0,
          "why": "Enforcement is distributed. Some traffic may still go to a central site, and remote-user VPNs often terminate at a regional site."
        },
        {
          "q": "Which drawback matches a firewalls-everywhere design that is not centrally managed?",
          "choices": [
            "A single laptop becomes the only path for every remote user",
            "The design cannot segment users inside a branch",
            "SaaS performance is always worse than full backhaul to headquarters",
            "Cost and operational load rise, because many sites need consistent policy, signature updates, correct sizing, and correlated logs"
          ],
          "answer": 3,
          "why": "The challenges slide lists policy consistency, software and signature lifecycle, many enforcement points, edge sizing, and log collection."
        },
        {
          "q": "A retailer with 150 branches, heavy Office 365 use, limited branch IT, guest Wi-Fi, and payment traffic wants consistent policy without hauling SaaS to the data center. Which example solution matches the course?",
          "choices": [
            "Use autonomous access points and no firewall",
            "Backhaul every SaaS session through the data center and do not use direct Internet access",
            "Use SD-WAN with cloud-delivered SSE or SASE, and send Internet and SaaS from the branch to cloud security",
            "Replace the WAN with clientless ZTNA and no site-to-site connectivity"
          ],
          "answer": 2,
          "why": "The retail example keeps local breakout and puts consistent web and SaaS controls in cloud-delivered security. Payment, guest, and IoT needs can still justify branch controls."
        },
        {
          "q": "A regulated firm keeps sensitive applications in the data center, must log traffic, and will allow only limited SaaS breakout. Which example solution matches the course?",
          "choices": [
            "A hybrid model: keep sensitive and data-center traffic on the private WAN through the central stack, and allow limited direct Internet access only with controls",
            "Send every flow, including core banking applications, direct to the Internet",
            "Remove the central firewall because ZTNA replaces site connectivity",
            "Use one shared VLAN for employees, guests, ATMs, and IoT"
          ],
          "answer": 0,
          "why": "The financial example keeps centralized inspection for sensitive traffic and treats DIA as a controlled exception, with segmentation between user and device groups."
        },
        {
          "q": "Which set of controls does the course place in Secure Service Edge?",
          "choices": [
            "StackWise, EtherChannel, and a first-hop redundancy protocol",
            "LISP, VXLAN, and IS-IS only",
            "WEP, TKIP, and open authentication",
            "Secure web gateway, DNS-layer protection, CASB, data loss prevention, and ZTNA"
          ],
          "answer": 3,
          "why": "SSE is the cloud-delivered stack for user-to-Internet and user-to-application controls. Remote users connect to the nearest point of presence."
        },
        {
          "q": "The course writes SASE as which combination?",
          "choices": [
            "SSE plus SD-WAN, so cloud-delivered security and network connectivity sit in one architecture",
            "A campus fabric made only of LISP and VXLAN",
            "MACsec on a single Ethernet hop",
            "ZTNA with no WAN underneath it"
          ],
          "answer": 0,
          "why": "The slide states SASE equals SSE plus SD-WAN. It is a larger transformation than adding SSE alone, and it needs network and security teams aligned."
        },
        {
          "q": "A retail customer uses MPLS for branch-to-branch traffic and data-center access, and wants ZTNA so they can drop MPLS. What should you explain?",
          "choices": [
            "ZTNA replaces MPLS when a client is installed on every branch router",
            "Clientless ZTNA builds a full site-to-site fabric",
            "ZTNA can improve secure user access to applications, but it does not replace the branch-to-branch WAN connectivity MPLS provides",
            "ZTNA steers branch traffic by adding a second identity provider to the MPLS network"
          ],
          "answer": 2,
          "why": "This is the module review item. ZTNA is application access for users. It is not a site-to-site WAN, and it may coexist with VPN during a migration."
        },
        {
          "q": "Which set should you highlight as core Secure Web Gateway functions?",
          "choices": [
            "Site-to-site VPN tunnels and 802.1X port authentication",
            "Automated server patching, internal database administration, and endpoint hardware monitoring",
            "PoE budgeting and Wi-Fi channel bonding",
            "URL category and reputation filtering, TLS inspection, and sandbox analysis of unknown files"
          ],
          "answer": 3,
          "why": "The review item’s correct functions are sandboxing, URL category and domain reputation, and SSL/TLS inspection. The other choices are outside the secure web gateway."
        },
        {
          "q": "Employees have allowed third-party productivity tools into the company’s Microsoft 365 tenant. Which CASB response matches the review?",
          "choices": [
            "Discover and catalog those app permissions, classify them by risk and permission scope, and revoke unapproved or high-risk permissions",
            "Reset every user password and move all business data back to an on-premises server",
            "Add a second MPLS provider so OAuth grants are encrypted",
            "Limit bandwidth for external cloud tools and turn on multifactor authentication only for internal web servers"
          ],
          "answer": 0,
          "why": "The review answer is discovery, risk classification, and revocation of risky app permissions. Password resets and a full return to on-premises storage are not the CASB actions named."
        },
        {
          "q": "Which three ideas describe firewalls everywhere when it is compared with a centralized firewall?",
          "choices": [
            "Every flow must pass a central facility, operations are always simpler, and one enforcement point covers all locations",
            "The model is meant only for a handful of branches, and policy cannot be centralized",
            "Enforcement is closer to users and devices, Internet traffic can exit locally, and inspection is distributed across branches",
            "It removes the need for any branch platform sizing or log collection"
          ],
          "answer": 2,
          "why": "The review item’s correct traits are local enforcement, local Internet exit, and distributed firewalls. It does not claim simpler operations or a single central choke point."
        }
      ]
    },
    {
      "id": 13,
      "day": "Day 4 · Secure campus",
      "title": "Campus design and availability",
      "questions": [
        {
          "q": "How does the course define a campus?",
          "choices": [
            "One or more buildings and the surrounding grounds, where people and their devices need wired and wireless access to each other and to other domains",
            "Any set of branches connected by MPLS, regardless of distance",
            "Only the data-center cage that hosts the core routers",
            "A single access point and its basic service area"
          ],
          "answer": 0,
          "why": "The campus discussion is about user and device access in a similar geographic area, including wired, wireless, security, and management."
        },
        {
          "q": "The campus multi-layer model always has which logical layers, even when a device collapses more than one of them?",
          "choices": [
            "Supplicant, authenticator, and authentication server",
            "Underlay, overlay, and fusion only",
            "Access, distribution, and core",
            "Spine, leaf, and route reflector only"
          ],
          "answer": 2,
          "why": "Each logical layer has its own job. If you collapse layers, that device has to perform every function of the layers it combines."
        },
        {
          "q": "Which description matches the campus access layer in the course?",
          "choices": [
            "It terminates every VLAN on a firewall and never powers an endpoint",
            "It connects users and devices, is often Layer 2, and is where PoE, 802.1X, and port features such as PortFast and BPDU Guard are common",
            "It builds VXLAN tunnels between spines",
            "It is a pure Layer 3 core whose only job is BGP transit with almost no features"
          ],
          "answer": 1,
          "why": "Access is the wiring closet. Distribution connects access to the core and is commonly Layer 2 toward access and Layer 3 toward the core. The core aims for simple, high-bandwidth Layer 3 transport."
        },
        {
          "q": "What do Perpetual PoE and Fast PoE do on a campus switch?",
          "choices": [
            "Perpetual PoE keeps powered devices up during a software reload, and Fast PoE supplies power at boot before the full operating system is up",
            "They encrypt the access port with MACsec",
            "They bond 2.4 GHz and 6 GHz into one channel",
            "They replace CDP and LLDP for neighbor discovery"
          ],
          "answer": 0,
          "why": "Phones, access points, cameras, and lighting depend on the switch. The course also describes 2-event classification, which can deliver PoE+ power before CDP or LLDP exchanges the power level."
        },
        {
          "q": "The course associates UPOE+ and IEEE 802.3bt with about how much power on an access port?",
          "choices": [
            "30 watts, which is PoE+",
            "15 watts, which is the original PoE level",
            "4 watts, which is a USB accessory budget",
            "90 watts"
          ],
          "answer": 3,
          "why": "The access-port timeline shows 15 W PoE, 30 W PoE+, 60 W UPOE, and 90 W UPOE+, and it ties the high end to 802.3bt for devices such as lighting and thin clients."
        },
        {
          "q": "Which platform tradeoff matches the course comparison of modular and fixed switches?",
          "choices": [
            "Modular platforms are preferred only for one-access-point offices",
            "Both types are identical except for the paint color",
            "Modular platforms add flexibility, port density, and redundant processors, with a larger footprint and more complexity. Fixed platforms are simpler and smaller, with a single processor",
            "Fixed platforms always have redundant supervisors and a longer lifecycle than modular chassis"
          ],
          "answer": 2,
          "why": "The slide lists modular pros as flexibility, lifecycle, density, power, and redundant processors, and fixed pros as simplicity, higher MTBF, smaller size, and lower cost."
        },
        {
          "q": "Which speed story does the course tell for a modern campus?",
          "choices": [
            "Access stays at 10 megabit because Wi-Fi does not affect the wired uplink",
            "Multigigabit access, driven by Wi-Fi and video, pushes distribution and core toward 25, 100, and 400 Gigabit uplinks, with typical ratios up to 20:1 from access to distribution and 4:1 from distribution to core",
            "The core should be slower than the access port so the network naturally polices traffic",
            "PoE wattage determines the routing protocol"
          ],
          "answer": 1,
          "why": "The trend slide cites Wi-Fi 6, 6E, and 7, private 5G, video, smart-building IoT, and 90 W PoE as the pressure toward faster access and much faster uplinks."
        },
        {
          "q": "How does the course want you to talk about availability?",
          "choices": [
            "Availability is only the mean time between failures, so repair time does not matter",
            "Raise mean time between failures and lower mean time to repair. Five nines is about five minutes of downtime a year. Redundancy has to exist at every layer, including during maintenance",
            "A network that rarely fails does not need redundant links, because maintenance never causes an outage",
            "Adding the maximum number of links is always the best high-availability design"
          ],
          "answer": 1,
          "why": "The course defines MTBF and MTTR, shows single points of failure, and later says good design balances resiliency, convergence, simplicity, and the size of a failure domain. Redundancy also covers planned work."
        },
        {
          "q": "Which statement matches StackWise Virtual?",
          "choices": [
            "Up to eight fixed access switches must sit next to each other and use dedicated stack cables",
            "It is the wireless method that punctures a preamble around interference",
            "Two physical switches, which may be apart, act as one logical switch over a StackWise Virtual Link, with one active control plane, both switches forwarding, and Multichassis EtherChannel",
            "It is a routing protocol that replaces OSPF"
          ],
          "answer": 2,
          "why": "StackWise Virtual targets distribution and core on Catalyst 9400, 9500, and 9600. A separate dual-active detection link is recommended. It is meant to retire spanning tree and first-hop redundancy at that layer."
        },
        {
          "q": "Which pair of upgrade features does the course credit with little or no traffic loss, and where does each apply?",
          "choices": [
            "StackWise membership alone, with no separate upgrade feature",
            "Graceful Insertion and Removal, and a cold software-maintenance reload, as the two hitless methods",
            "ISSU on switches with redundant supervisors or StackWise Virtual, and extended Fast Software Upgrade on fixed switches and stacks",
            "StackPower and a larger PoE budget"
          ],
          "answer": 2,
          "why": "The review item’s hitless or low-impact software updates are ISSU and xFSU. ISSU is described with a short switchover, often under 200 milliseconds. xFSU aims for under a second of data-plane downtime on fixed platforms. A cold SMU still needs a reload."
        }
      ]
    },
    {
      "id": 14,
      "day": "Day 4 · Secure campus",
      "title": "VLANs, VRFs, and access control",
      "questions": [
        {
          "q": "How does the course separate macro-segmentation from micro-segmentation?",
          "choices": [
            "They are two names for a private VLAN",
            "Macro-segmentation is a Security Group Tag, and micro-segmentation is a VLAN",
            "Macro-segmentation separates major groups such as employees, guests, and IoT. Micro-segmentation restricts device-to-device or user-to-application traffic inside that design",
            "Macro-segmentation applies only to Wi-Fi, and micro-segmentation applies only to fiber"
          ],
          "answer": 2,
          "why": "Macro tools named in the deck are VLANs, VRFs, and firewall zones. Micro tools combine 802.1X, downloadable ACLs, Security Group Tags, VLANs, and VRFs."
        },
        {
          "q": "Which statement about VLANs matches the course?",
          "choices": [
            "A VLAN verifies the identity of whoever plugs into the port",
            "Devices in different VLANs can talk at Layer 2 without a router",
            "VLANs prevent every lateral movement inside the same VLAN",
            "A VLAN is its own Layer 2 broadcast domain. Devices in different VLANs need a Layer 3 device before they can communicate, and that path is where policy can be applied"
          ],
          "answer": 3,
          "why": "The solution slide says VLANs group users and services, cut extra broadcasts, and create policy boundaries. They do not, by themselves, stop movement inside one VLAN."
        },
        {
          "q": "Which limitation does the course assign to VLAN segmentation?",
          "choices": [
            "It is often static and tied to a port or location, so a move can require a network change, and policy follows the subnet rather than the person",
            "It logs every denied frame and can be extended across a campus with no design cost",
            "It assigns a Security Group Tag that follows the user onto the WAN",
            "It creates a separate routing table for every user"
          ],
          "answer": 0,
          "why": "The limitations slide also warns about VLAN sprawl. Private VLANs add isolation inside one subnet, but they are hard to extend, drop silently, and stay at Layer 2."
        },
        {
          "q": "Why does the course say Layer 2 segmentation is not enough once traffic is routed?",
          "choices": [
            "A trunk blocks every inter-VLAN packet",
            "Routing automatically creates a VRF for every VLAN",
            "Different VLANs can still land in the same routing table, so a large ACL at the first Layer 3 device becomes the only control and a mistake can expose one group to another",
            "Layer 3 switches cannot carry ACLs"
          ],
          "answer": 2,
          "why": "The slide shows guest, IoT, and corporate VLANs separated at Layer 2 and then routed together. Sensitive groups may need a stronger boundary."
        },
        {
          "q": "What does a VRF add beyond VLANs?",
          "choices": [
            "A new Wi-Fi channel for each department",
            "Encryption of the Ethernet frame on one hop",
            "Automatic user identity and micro-segmentation with no other product",
            "A separate routing table, so groups stay apart at Layer 3 and can even reuse the same addresses. They meet only through a firewall or deliberate route leaking"
          ],
          "answer": 3,
          "why": "VRF benefits are stronger separation, overlap of addresses, and scale beyond VLANs. The course also says a VRF does not identify a user or device and is not micro-segmentation by itself."
        },
        {
          "q": "In the meeting-room story, a visitor unplugs a room navigator and uses that port. What is the expected lesson?",
          "choices": [
            "VLANs and VRFs do not notice that a different device connected. The port needs authentication and authorization before it grants trusted access",
            "A visitor laptop is safe because it joined the navigator’s subnet",
            "The VLAN changes itself when the MAC address changes",
            "VRFs identify the visitor by certificate without any access-control platform"
          ],
          "answer": 0,
          "why": "The solution says unknown devices should not inherit a trusted port, and static configuration fails when someone swaps the plugged-in device."
        },
        {
          "q": "After 802.1X authentication succeeds, which question does authorization answer?",
          "choices": [
            "Which antenna the access point should use",
            "Which MPLS label the core should push",
            "What access this user or device should receive, such as a VLAN, a downloadable ACL, a redirect, quarantine, a permit, or a deny",
            "Whether the switch stack cable is seated"
          ],
          "answer": 2,
          "why": "Authentication asks who or what is connecting. The authentication server returns the policy, and the switch enforces it."
        },
        {
          "q": "How should you position MAC Authentication Bypass?",
          "choices": [
            "A Layer 3 routing protocol",
            "The preferred method for every laptop that can run 802.1X",
            "A fallback that lets printers, cameras, phones, and many IoT devices on board by MAC address. It is weaker than a certificate because a MAC can be spoofed",
            "Encryption for an open guest network"
          ],
          "answer": 2,
          "why": "The course prefers 802.1X for capable devices and treats MAB as the common method for devices with no supplicant. It should be backed by profiling and policy."
        },
        {
          "q": "Which 802.1X deployment mode refuses access until authentication succeeds?",
          "choices": [
            "Monitor mode that still forwards all user traffic with no change",
            "Open mode",
            "Low-impact mode",
            "Closed mode"
          ],
          "answer": 3,
          "why": "Closed mode is the strongest control and can disrupt a network that is not ready. Open mode allows access before enforcement for visibility. Low-impact mode starts with limited access and tightens it after the policy decision."
        },
        {
          "q": "Why does the course introduce a central platform such as Cisco ISE instead of configuring every port by hand?",
          "choices": [
            "ISE replaces the need for any switch or access point",
            "Guests, employees, phones, printers, IoT, and contractors need different access, and the same decision should apply on wired, wireless, and VPN",
            "Profiling works only when no identity source is connected",
            "Each closet should keep a unique local policy so users get different rights on each floor"
          ],
          "answer": 1,
          "why": "ISE is the example policy point: it ties authentication to authorization, profiles devices, checks posture, and can return a VLAN, downloadable ACL, Security Group Tag, redirect, or deny."
        }
      ]
    },
    {
      "id": 15,
      "day": "Day 4 · Secure campus",
      "title": "TrustSec and scalable policy",
      "questions": [
        {
          "q": "Cisco TrustSec changes policy from IP-to-IP rules into what?",
          "choices": [
            "A separate VRF for every laptop",
            "Channel bonding between access points",
            "One VLAN per person, extended across the campus",
            "Group-to-group rules, using a Security Group Tag for the role and a Security Group ACL between tags"
          ],
          "answer": 3,
          "why": "A Security Group Tag is a number for a role, such as employee, guest, or printer. ISE assigns it after 802.1X or MAB, and the access switch tags that endpoint’s traffic."
        },
        {
          "q": "Which sequence matches how TrustSec works in the course?",
          "choices": [
            "The core assigns a VLAN, then the access switch ignores identity",
            "SXP encrypts the payload before ISE is contacted",
            "The endpoint chooses its own tag and the firewall trusts it",
            "The device authenticates, ISE assigns a Security Group Tag, the tag travels with the traffic, and a TrustSec device enforces the Security Group ACL"
          ],
          "answer": 3,
          "why": "The flow slide is authentication, policy evaluation, tag assignment, tag on the traffic, then enforcement. The enforcing device must know the source tag, destination tag, and the policy between them."
        },
        {
          "q": "When is inline Security Group Tagging the course’s preferred propagation method?",
          "choices": [
            "When the customer refuses to use ISE",
            "When the path can carry the tag inside the Ethernet frame from end to end",
            "When the only goal is a static map from a subnet to a tag on one data-center switch",
            "When no switch on the path understands TrustSec, so the tag must be looked up from an IP address"
          ],
          "answer": 1,
          "why": "Inline tagging inserts the SGT in the frame. SXP is the alternative that shares IP-to-SGT mappings when devices cannot carry the tag. Local maps from subnet, VLAN, or interface are a third method."
        },
        {
          "q": "What is the Security Group Tag Exchange Protocol used for?",
          "choices": [
            "Electing a spanning-tree root",
            "Sharing IP-to-SGT mappings with devices that cannot carry the tag in the frame. ISE can be the central place those mappings come from",
            "Roaming a Wi-Fi client between controllers",
            "Encrypting WAN Ethernet at line rate"
          ],
          "answer": 1,
          "why": "SXP lets an enforcement device learn which address belongs to which tag. The course also shows ISE pushing the binding toward a data-center switch."
        },
        {
          "q": "Why can TrustSec stay smaller than classic ACLs as groups grow?",
          "choices": [
            "Each new server still needs its own permit line for every user address",
            "TrustSec works only for IPv4, so the IPv6 table stays unmanaged",
            "A Security Group ACL is written between roles, so the same statements cover many addresses. The course example contrasts dozens of group rules with tens of thousands of IP ACL lines",
            "Tags are meaningful only inside one wiring closet"
          ],
          "answer": 2,
          "why": "One worked example grows four sources and six destinations into 96 ACL entries. The group example contrasts 48 Security Group ACL statements with 48,000 traditional entries."
        },
        {
          "q": "Which benefit does the course claim for TrustSec policy?",
          "choices": [
            "It replaces authentication, so 802.1X can be removed",
            "It is written in business language, follows the user or device instead of the IP address, and can be enforced on wired, wireless, VPN, and firewall devices",
            "It requires a new VLAN every time a person changes floors",
            "It is limited to about ten devices in one private VLAN"
          ],
          "answer": 1,
          "why": "The benefits slide also cites less ACL sprawl and scale for both IPv4 and IPv6. The summary table positions TrustSec for large sites with many zones, centralized policy on ISE, and logging."
        },
        {
          "q": "On the course’s segmentation menu, which tool is aimed at a handful of major domains such as guest, corporate, and IoT, including overlapping addresses?",
          "choices": [
            "OFDMA resource units",
            "VRFs",
            "Private VLANs for a few devices that only need Layer 2 isolation",
            "A single campus-wide VLAN"
          ],
          "answer": 1,
          "why": "The summary table gives VLANs a small number of zones, private VLANs a small device count inside a zone, VRFs roughly ten to fifty major domains, and TrustSec the large multi-zone case."
        },
        {
          "q": "Which weakness can IoT devices create in a traditional campus, according to the module review?",
          "choices": [
            "They mainly create tickets about bandwidth",
            "They always use more switch ports than the closet has",
            "They require a new VLAN on every physical port",
            "They may not support a security agent or standard authentication"
          ],
          "answer": 3,
          "why": "The review answer is the lack of agents and of 802.1X. That is why profiling and MAB show up in the access-control story."
        },
        {
          "q": "Users move often, and the organization wants the same access policy wherever they connect. Which review answer fits?",
          "choices": [
            "Build a separate VRF for each user",
            "Rely only on dynamic VLAN assignment, which still ties the user to a network segment",
            "Extend every departmental VLAN across the campus so the subnet never changes",
            "Deploy Cisco SD-Access and use Security Group Tags so policy is based on identity"
          ],
          "answer": 3,
          "why": "The review item says VLANs do not keep policy stable for mobile users. SGTs in SD-Access are the option that follows identity rather than location."
        },
        {
          "q": "Traditional NAC with VLANs and downloadable ACLs still becomes hard at campus scale because of what?",
          "choices": [
            "The decision can be dynamic, but enforcement stays tied to places, subnets, and address-based ACLs that have to be maintained as people move",
            "Security Group Tags cannot be used on a firewall",
            "ISE cannot return a policy to a switch",
            "802.1X and MAB cannot run on the same network"
          ],
          "answer": 0,
          "why": "The activity solution says downloadable ACLs describe policy with IP addresses, and other devices still need their own policy. TrustSec is the course’s answer to that operational weight."
        }
      ]
    },
    {
      "id": 16,
      "day": "Day 4 · Secure campus",
      "title": "SD-Access fabric",
      "questions": [
        {
          "q": "Which scaling problem does the course blame on a traditional campus?",
          "choices": [
            "Identity services assign a tag before any device connects",
            "Spanning tree is removed, so loops are impossible",
            "The underlay cannot forward IP",
            "More device types create more VLANs and subnets, policy stays tied to location, and the same change is typed into many switches"
          ],
          "answer": 3,
          "why": "The course turns that technical sprawl into a business problem: slower onboarding, longer change windows, misconfiguration, and inconsistent security."
        },
        {
          "q": "In a campus fabric, what is the underlay?",
          "choices": [
            "A VLAN stretched from the access closet to the data center",
            "The logical network that carries segmentation the physical network does not have to understand",
            "The guest captive portal",
            "The physical IP network that provides reachability, redundancy, and a simple transport"
          ],
          "answer": 3,
          "why": "The overlay is the logical topology, with examples such as VXLAN, LISP, and EVPN. The course prefers carrying segmentation in the overlay so the underlay can stay simple."
        },
        {
          "q": "Which protocol set does the course show for the Cisco SD-Access fabric, in contrast with a long list of legacy campus protocols?",
          "choices": [
            "IS-IS, VXLAN, and LISP",
            "CAPWAP as both the control plane and the data plane for wired hosts",
            "Spanning tree, VTP, HSRP, and VLAN trunks between every fabric node",
            "LDP, VPLS, and a pseudowire for every user"
          ],
          "answer": 0,
          "why": "The simplification slide reduces the operator’s view to a fabric of IS-IS, VXLAN, and LISP, automated from Catalyst Center, instead of configuring every legacy feature by hand."
        },
        {
          "q": "Which SD-Access role connects users and devices, authenticates them through ISE, and encapsulates their traffic into VXLAN?",
          "choices": [
            "The control-plane node",
            "The fusion firewall",
            "The border node",
            "The fabric edge node"
          ],
          "answer": 3,
          "why": "The control-plane node tracks endpoint identity and location with LISP. The border node connects the fabric to outside networks and handles routing between virtual networks and external destinations."
        },
        {
          "q": "What do an endpoint identifier and a routing locator mean in SD-Access LISP?",
          "choices": [
            "They are the active and standby supervisors",
            "The endpoint identifier is a VLAN number, and the routing locator is a spanning-tree priority",
            "The endpoint identifier is the access-point channel, and the routing locator is the SSID",
            "The endpoint identifier is who the host is, usually its IP address. The routing locator is where that host is attached right now"
          ],
          "answer": 3,
          "why": "LISP separates identity from location, so a user can move without a redesign of the network. Edge nodes register and request those mappings from the control plane."
        },
        {
          "q": "What does the SD-Access VXLAN header carry so segmentation survives the trip across the underlay?",
          "choices": [
            "Only the spanning-tree root bridge ID",
            "A new physical VLAN on every hop",
            "The Wi-Fi passphrase",
            "The virtual network and the Security Group Tag, along with the original frame"
          ],
          "answer": 3,
          "why": "The data-plane picture encapsulates the original frame in VXLAN and includes the SGT and the virtual network, so the underlay forwards IP and the overlay keeps policy."
        },
        {
          "q": "How does SD-Access express macro-segmentation?",
          "choices": [
            "A campus-wide VLAN for each department",
            "A Security Group Tag by itself, with every group in one routing table",
            "An open SSID with no authentication",
            "A virtual network, implemented as a VRF, isolates a major group such as corporate, guest, IoT, OT, or PCI. Traffic does not cross virtual networks unless you design that path"
          ],
          "answer": 3,
          "why": "Inter-virtual-network traffic is not automatic. The course points to a fusion device as the place to insert a firewall when groups must communicate."
        },
        {
          "q": "A compromised employee device tries to reach sensitive systems inside the same SD-Access virtual network. Which capability limits that lateral movement?",
          "choices": [
            "The virtual network alone, which already separates every user from every other user",
            "Security Group Tags, which micro-segment endpoint groups inside the broader virtual network",
            "The initial ISE login, which continues to filter every later packet without group policy",
            "Dynamic VLAN assignment, which is the fine-grained control inside one virtual network"
          ],
          "answer": 1,
          "why": "The review item distinguishes the broad separation of virtual networks from the finer SGT control used when the attacker is already inside the same virtual network."
        },
        {
          "q": "A customer needs a new isolated network for a business unit and does not want to change the physical underlay. How does a fabric do that?",
          "choices": [
            "The team creates the new logical segment in the overlay",
            "The team adds a dedicated routing process on every underlay device along the path",
            "The team extends a new VLAN across every underlay switch",
            "The team rewrites underlay routing policy so the new group is isolated hop by hop"
          ],
          "answer": 0,
          "why": "The review answer is the overlay. The underlay stays the simple routed transport, and the new segment does not require a new physical topology."
        },
        {
          "q": "What does SD-Access change about wireless forwarding?",
          "choices": [
            "The controller still switches every user packet, and wired policy stays on the access switch only",
            "Each SSID must be a separate physical network",
            "Wireless traffic enters the fabric and no longer has to hairpin through the controller. The controller keeps control and wireless services, and ISE holds policy for both wired and wireless",
            "Wireless clients cannot roam inside a fabric"
          ],
          "answer": 2,
          "why": "The course contrasts separate wired and wireless policy and data planes with one policy point in ISE and a distributed fabric data plane."
        }
      ]
    },
    {
      "id": 17,
      "day": "Day 4 · Secure campus",
      "title": "EVPN, fabrics, and a secure campus",
      "questions": [
        {
          "q": "Which description matches a BGP EVPN campus fabric?",
          "choices": [
            "A single Layer 2 domain running spanning tree between every access switch",
            "A wireless mesh with one radio for clients and one for backhaul",
            "An SD-WAN overlay using OMP and TLOCs",
            "A routed Layer 3 underlay with a VXLAN overlay, using BGP EVPN so leaves learn endpoints in the control plane instead of by flooding"
          ],
          "answer": 3,
          "why": "Route reflectors avoid a full BGP mesh. VNIs separate Layer 2 and Layer 3 segments. VTEPs, usually the leaves, encapsulate and de-encapsulate VXLAN."
        },
        {
          "q": "How do macro-segmentation and micro-segmentation show up in the EVPN pictures?",
          "choices": [
            "Private VLANs are the only segmentation tool, and VXLAN cannot carry a tag",
            "EVPN isolates groups by giving each user a dedicated SSID",
            "The spine rewrites every access list on the underlay",
            "VRFs and Layer 3 VNIs separate major groups. Security Group Tags can ride in the VXLAN group-based policy field for finer control"
          ],
          "answer": 3,
          "why": "The macro slide uses VRFs and L3 VNIs. The micro slide uses SGTs carried as group-based policy metadata across the fabric."
        },
        {
          "q": "Why does the course treat wireless roaming as a design caution on an EVPN campus fabric?",
          "choices": [
            "EVPN cannot forward any wireless traffic",
            "Wi-Fi clients do not move in a campus",
            "Roaming is free because the mapping lives only in DRAM on one control-plane node",
            "A roam can require updates on the access switches across the fabric, so client count, switch count, and roam scope all affect scale. Centralized wireless is the generally recommended approach"
          ],
          "answer": 3,
          "why": "The wireless consideration slide says every access switch may have to learn the roam, and it points to centralized wireless, or wireless over the top, as the usual recommendation."
        },
        {
          "q": "What do SD-Access with LISP and BGP EVPN have in common in this course?",
          "choices": [
            "A routed underlay that removes spanning tree between fabric nodes, a VXLAN overlay, and both macro-segmentation and micro-segmentation",
            "Both integrate the wireless LAN controller the same way and have the same scale limit",
            "Both require a stretched Layer 2 underlay",
            "Both are proprietary and have no IETF documents cited in the deck"
          ],
          "answer": 0,
          "why": "The comparison slide lists those shared traits and cites LISP and BGP EVPN as proposed IETF standards. The differences are where the sales conversation continues."
        },
        {
          "q": "Where does the course say EVPN’s endpoint scale is limited?",
          "choices": [
            "By the smallest hardware forwarding table on the access switches, because every access switch tracks endpoint location in TCAM",
            "By the PoE budget of the core",
            "By the number of SSIDs advertised on 2.4 GHz",
            "By the DRAM of one selected mapping node, which is the LISP model"
          ],
          "answer": 0,
          "why": "LISP tracks location in DRAM on a selected device. EVPN uses the hardware table on all access switches. The course’s example of a 32K table supports about 4,500 dual-stacked hosts, because IPv6 consumes extra entries."
        },
        {
          "q": "What happens if you pull an EVPN fabric back to the aggregation layer so you can use a larger forwarding table?",
          "choices": [
            "The access layer becomes a LISP control plane automatically",
            "Wireless and wired policy stay unified and the underlay stays free of VLANs",
            "You regain table space and give up the simplification, because Layer 2 features, spanning tree, and the old access design return, along with the loss of unified wired and wireless",
            "Scale becomes unlimited without any other tradeoff"
          ],
          "answer": 2,
          "why": "Workaround one uses the larger aggregation tables, such as 256K, and the next slide says it reintroduces complexity. Splitting into several fabrics also drops stretched Layer 2 and unified wireless."
        },
        {
          "q": "The course compares a simultaneous roam of about 400 students. Why can LISP stay smaller than EVPN in that story?",
          "choices": [
            "EVPN sends one update no matter how many switches exist",
            "LISP floods the roam to every leaf, and EVPN updates only one controller",
            "Neither control plane notices a roam",
            "LISP updates the mapping system a couple of times per roam, while EVPN updates grow with the number of switches in the fabric"
          ],
          "answer": 3,
          "why": "The table keeps LISP at 800 updates for that roam event across 20, 50, 100, or 200 switches, while the EVPN column climbs from 30,400 to 318,400."
        },
        {
          "q": "Which reason does the course give for leading with LISP and SD-Access rather than leading with EVPN?",
          "choices": [
            "LISP has no IETF specification",
            "Mobility and unified wired and wireless, scale that is not capped by the smallest access switch, and a campus design rather than one driven by service-provider and data-center use",
            "EVPN is the only fabric that integrates a wireless LAN controller",
            "EVPN cannot be an open standard"
          ],
          "answer": 1,
          "why": "The lead-with-LISP slide also notes that campus equipment is not always in EVPN interoperability testing, and that automation tools can create lock-in even when the forwarding standard is open."
        },
        {
          "q": "Which hardware and software protections does the secure-campus summary stack on a Catalyst platform?",
          "choices": [
            "A Trust Anchor with SUDI, secure boot, image signing, and runtime defenses, with the course marking that path as quantum-safe using post-quantum cryptography",
            "An unsigned image loaded from any USB stick",
            "WEP on the management port",
            "A shared administrator password and Telnet"
          ],
          "answer": 0,
          "why": "The protection slide lines those controls up against tampering, binary attacks, runtime attacks, and BIOS or ROMMON attacks. Secure boot was introduced earlier with the same Trust Anchor idea."
        },
        {
          "q": "A customer can start at different points and still build toward a secure campus. Which sequence matches the course’s menu?",
          "choices": [
            "Trustworthy hardware and software, an architecture that fits the customer, transport and wireless protection, endpoint visibility, segmentation, and monitoring",
            "One flat VLAN, then a permanent exception for every new device",
            "Guest Wi-Fi only, because the campus no longer uses wired access",
            "Monitoring first, with no need for identity or segmentation"
          ],
          "answer": 0,
          "why": "The summary is start anywhere and build up: secure the platform, build the network, secure connectivity, see who and what connects, segment with virtual networks and Security Group Tags, and monitor for vulnerable, misconfigured, outdated, or end-of-support devices."
        }
      ]
    },
    {
      "id": 18,
      "day": "Day 5 · Wireless",
      "title": "Radio, spectrum, and Wi-Fi generations",
      "questions": [
        {
          "q": "Where does the course place Wi-Fi in the TCP/IP stack?",
          "choices": [
            "On the link, covering the physical and data-link work of carrying frames over radio",
            "Only at the transport layer, as a replacement for TCP",
            "In the routing protocol between campus cores",
            "At the application layer, next to HTTP"
          ],
          "answer": 0,
          "why": "The mapping slide combines OSI physical and data link into the TCP/IP link. The generation timeline runs from 802.11a and 802.11b through Wi-Fi 7, which is 802.11be."
        },
        {
          "q": "Which radio statement matches the course?",
          "choices": [
            "SNR can be improved only by raising transmit power, never by reducing noise",
            "6 GHz travels farther than 2.4 GHz in free space at the same power",
            "dBm is a relative gain with no reference, and dB is an absolute power in milliwatts",
            "Higher frequencies have higher free-space path loss, so 6 GHz needs more power or antenna gain than 2.4 GHz to hold the same cell and the same received level"
          ],
          "answer": 3,
          "why": "dBm is power relative to 1 milliwatt. RSSI measures how well a device receives the signal. SNR is that signal after noise, improved by a stronger signal or less noise."
        },
        {
          "q": "A customer compares older access points that use antenna diversity with MIMO access points. What advantage does the course give MIMO?",
          "choices": [
            "MIMO removes the need for any retransmission when interference appears",
            "Antenna diversity bonds channels into one wider channel",
            "MIMO can use several radio chains and several signal paths at the same time to raise throughput and reliability",
            "Antenna diversity lets several clients transmit at once on one radio chain"
          ],
          "answer": 2,
          "why": "Diversity was the older way to pick a better copy of one signal. Spatial multiplexing then sends different streams in parallel. Single-user MIMO raises one client’s throughput. Multi-user MIMO raises capacity under load."
        },
        {
          "q": "A busy office on Wi-Fi 5 stalls when many users send small amounts of data at once. Which Wi-Fi 6 behavior does the course credit with helping?",
          "choices": [
            "MU-MIMO removes all contention for the medium",
            "RTS/CTS becomes mandatory for every frame so collisions cannot occur",
            "OFDMA lets the access point serve several devices in one transmission opportunity by giving them resource units",
            "OFDM raises client transmit power to overpower the noise"
          ],
          "answer": 2,
          "why": "The review item’s answer is OFDMA. OFDM gives the whole channel to one transmitter at a time. Wi-Fi remains a shared half-duplex medium, and two clients can still fail to hear each other and collide at the access point."
        },
        {
          "q": "Users farther from the access point get lower throughput even though their devices are the same model. What does the course say is happening?",
          "choices": [
            "The access point turns off retransmissions for weak clients",
            "As signal quality falls, Wi-Fi steps down to a lower modulation and coding rate so the connection stays reliable",
            "Distant clients are forced onto fewer channels",
            "The access point narrows the channel width whenever a client walks away"
          ],
          "answer": 1,
          "why": "Larger constellations carry more bits per symbol and need higher SNR, so they work near the access point. QPSK sits below 16-QAM, 64-QAM, 256-QAM, and 1024-QAM. The rate adapts per client."
        },
        {
          "q": "Why does the course care how many channels a band has?",
          "choices": [
            "Bonding channels always increases both peak speed and the number of clean channels",
            "Non-Wi-Fi devices such as microwaves and weather radar cannot affect Wi-Fi",
            "More non-overlapping channels let neighboring access points avoid sharing airtime. 2.4 GHz has three clean channels, 1, 6, and 11, while 5 GHz and 6 GHz have many more",
            "All three bands have the same three channels, so density does not change the design"
          ],
          "answer": 2,
          "why": "The spectrum table gives 2.4 GHz about 60 MHz and three 20 MHz channels, 5 GHz about 500 MHz and 25 channels, and 6 GHz in the United States about 1,200 MHz and 59 channels. Wider bonding buys peak rate and spends channels."
        },
        {
          "q": "Which improvements does the course attach to Wi-Fi 7?",
          "choices": [
            "A new requirement that every client use only 2.4 GHz",
            "Removal of OFDMA so each client waits its turn",
            "320 MHz channels, 4K-QAM, multi-resource-unit allocation, preamble puncturing, and multi-link operation across bands",
            "A return to 20 MHz-only channels and WEP"
          ],
          "answer": 2,
          "why": "4K-QAM needs very high SNR. Preamble puncturing lets a wide channel skip an interfered slice. Multi-link operation can use 2.4, 5, and 6 GHz together and keep going if one band gets congested."
        },
        {
          "q": "The course describes Wi-Fi performance as which three dimensions?",
          "choices": [
            "Open authentication, WEP, and TKIP",
            "MPLS labels, VRFs, and route reflectors",
            "Modulation, limited by SNR; spatial multiplexing, limited by what the client can do; and channel width, limited by available spectrum",
            "PoE budget, stack cables, and supervisor count"
          ],
          "answer": 2,
          "why": "The design summary adds that airtime is the scarce resource, slow clients consume a disproportionate share of it, and smaller cells plus a clean channel plan are how density scales."
        },
        {
          "q": "Which maximum rates does the course print on the Wi-Fi generation slide?",
          "choices": [
            "Every generation since 802.11b tops out at 54 Mbps",
            "Wi-Fi 7 is limited to the 11 Mbps of 802.11b",
            "802.11n up to 600 Mbps, 802.11ac up to 7 Gbps, 802.11ax up to 9.6 Gbps, and 802.11be up to 23 Gbps",
            "Wi-Fi 6 is slower than Wi-Fi 4 because OFDMA reduces the peak rate"
          ],
          "answer": 2,
          "why": "Those are the course’s stated maximums, along with the features that produce them: 64-QAM and 40 MHz for Wi-Fi 4, 256-QAM for Wi-Fi 5, 1024-QAM and OFDMA for Wi-Fi 6, and 4096-QAM, 320 MHz, and multi-link operation for Wi-Fi 7."
        },
        {
          "q": "How does the course compare 2.4 GHz with 5 GHz and 6 GHz?",
          "choices": [
            "2.4 GHz has more than fifty non-overlapping 20 MHz channels",
            "2.4 GHz reaches farther and propagates better, but it is crowded and short of channels. 5 GHz and 6 GHz are cleaner and have more channels, with shorter range and less support on old devices",
            "6 GHz has the best range and the most non-Wi-Fi interference",
            "5 GHz cannot be used for an enterprise SSID"
          ],
          "answer": 1,
          "why": "The activity solution draws exactly that contrast. Extra spectrum matters because 2.4 and 5 GHz are already congested and wide channels are hard to reuse there."
        }
      ]
    },
    {
      "id": 19,
      "day": "Day 5 · Wireless",
      "title": "SSIDs and deployment models",
      "questions": [
        {
          "q": "Which wireless terms match the course?",
          "choices": [
            "An extended service set is a single access point with no roaming",
            "The basic service set is the service an access point offers, named by the SSID. The basic service area is the cell. An extended service set is one logical Wi-Fi network across cells",
            "An SSID is a routing protocol, and a cell is a VRF",
            "The access point routes at Layer 3 and does not bridge 802.11 to Ethernet"
          ],
          "answer": 1,
          "why": "The access point is a translational bridge between 802.11 wireless and 802.3 Ethernet. In the autonomous and Flex pictures, each SSID maps to a VLAN and a subnet."
        },
        {
          "q": "A campus already has SSIDs for employees, contractors, and guests, and wants new SSIDs for finance, HR, engineering, printers, cameras, and IoT. What does the course recommend?",
          "choices": [
            "Create one SSID per access point so roaming is impossible",
            "Add every department as its own SSID, because beacons are free",
            "Keep the SSID count small. Extra SSIDs spend airtime. Differentiate access with identity, dynamic VLANs, or Security Group Tags",
            "Put all of those groups on one open SSID and rely on users to behave"
          ],
          "answer": 2,
          "why": "The activity solution says more SSIDs increase contention and reduce performance. A few SSIDs plus policy is the segmentation approach."
        },
        {
          "q": "Which client conditions does the course list as reasons to roam?",
          "choices": [
            "A change in the switch’s PoE budget",
            "The access point rebooting its wired uplink only",
            "An MPLS label expiring",
            "Too many retries, low RSSI, low SNR, and the client’s own roaming thresholds"
          ],
          "answer": 3,
          "why": "Those are the roaming triggers on the overview slide. Enterprise Wi-Fi then has to make that roam fast across hundreds of access points."
        },
        {
          "q": "Which security changes does the course attribute to WPA3?",
          "choices": [
            "It removes WEP, TKIP, and SHA-1, can encrypt an open network without a password, and is required for Wi-Fi 6E and Wi-Fi 7 certification in 6 GHz",
            "It restores WEP as the strongest enterprise cipher",
            "It is optional on 6 GHz and mandatory only on 2.4 GHz",
            "It replaces 802.1X with a single pre-shared key for every employee"
          ],
          "answer": 0,
          "why": "Opportunistic Wireless Encryption protects open networks. WPA3 also hardens personal networks against offline guessing and reduces some disruption attacks. It can coexist with WPA2 on 2.4 and 5 GHz for older clients."
        },
        {
          "q": "What does the course say makes enterprise Wi-Fi different from a small home network?",
          "choices": [
            "Scale, WPA3-Enterprise with 802.1X, segmentation, fast roaming, radio optimization, high availability, and central operations",
            "Channel planning is unnecessary once the client supports Wi-Fi 6",
            "A single pre-shared key and one access point are enough for thousands of clients",
            "Enterprise networks skip authentication so roaming is faster"
          ],
          "answer": 0,
          "why": "The slide groups the difference into scale, security, reliability, and operations: hundreds of access points, thousands of clients, and centralized management."
        },
        {
          "q": "Which deployment fits a small office with one or two access points that must keep working with no controller?",
          "choices": [
            "A pair of large wireless LAN controllers in another country",
            "SD-Access fabric wireless",
            "A campus gateway cluster",
            "Autonomous access points"
          ],
          "answer": 3,
          "why": "Autonomous mode is simple and survives a WAN outage, and the course limits it to very small sites. It scales poorly, policy drifts, roaming is harder, and radios are not coordinated."
        },
        {
          "q": "A large campus has many access points and people walking between buildings. The activity solution points to which model?",
          "choices": [
            "A centralized wireless LAN controller, for coordinated policy, roaming, and radio management",
            "A mesh that uses 2.4 GHz for backhaul and has no wired access points",
            "One SSID per building with no shared controller",
            "Autonomous access points, because a campus should not have a controller"
          ],
          "answer": 0,
          "why": "Centralized mode splits work between the access point and the controller and uses CAPWAP. The cautions are controller dependency, scale, and WAN dependency at remote sites. FlexConnect is the course’s answer when remote traffic should stay local."
        },
        {
          "q": "A retail chain wants central management of access points, with user traffic switched locally in each store. Which model does the activity solution name?",
          "choices": [
            "Autonomous access points with no central management",
            "FlexConnect",
            "OpenRoaming as the store’s only WLAN design",
            "A full tunnel of every store’s traffic to one data-center controller"
          ],
          "answer": 1,
          "why": "FlexConnect keeps the controller for management and policy while local switching avoids a WAN hairpin. The coffee-shop chain in the same activity is the cloud-managed example, because new sites need a repeatable, remote setup."
        },
        {
          "q": "How does the course describe a Meraki campus gateway?",
          "choices": [
            "An on-premises LISP control-plane node",
            "A replacement for 802.1X on the wired closet",
            "A cloud-managed cluster that centrally switches selected SSIDs over a Layer 2 overlay, so the campus does not have to stretch one large VLAN for every client",
            "A UWB tag that reports asset location"
          ],
          "answer": 2,
          "why": "Meraki management goes to the dashboard, while user data can stay local. The campus gateway is the course’s answer when cloud management would otherwise extend a large Layer 2 domain. Tunnels can be VXLAN, QUIC, or Meraki, per SSID."
        },
        {
          "q": "A university wants the same policy and segmentation for wired and wireless users. Which deployment does the activity solution choose?",
          "choices": [
            "A guest portal with no identity",
            "Autonomous access points, because policy should be configured on each radio",
            "Ultra-reliable wireless backhaul for student laptops",
            "SD-Access wireless, with CAPWAP for control, VXLAN for the data plane, and policy from ISE"
          ],
          "answer": 3,
          "why": "Fabric-enabled access points switch locally in the fabric, the controller keeps the control plane, and Catalyst Center automates it. A mesh is a different tool: one radio serves clients and another is the wireless backhaul."
        }
      ]
    },
    {
      "id": 20,
      "day": "Day 5 · Wireless",
      "title": "OpenRoaming, location, and URWB",
      "questions": [
        {
          "q": "What problem does OpenRoaming address, and how?",
          "choices": [
            "It assigns Security Group Tags on a wired printer",
            "Painful or insecure guest onboarding. Access providers and identity providers federate so a user can join securely with a trusted identity and without a new captive-portal ritual",
            "It is a Layer 3 VPN for site-to-site traffic",
            "It replaces the campus core with a wireless LAN controller"
          ],
          "answer": 1,
          "why": "The course ties OpenRoaming to higher Wi-Fi adoption, zero-touch onboarding, and Cisco Spaces. It fits busy public venues. It is less compelling for a small staff-only site that is already happy with simple guest Wi-Fi."
        },
        {
          "q": "Which OpenRoaming example matches carrier offload?",
          "choices": [
            "A stadium, airport, or hospital shifts indoor users from cellular onto Wi-Fi to improve coverage where the cell signal is weak",
            "A factory AGV keeps a make-before-break radio link",
            "A switch enables Perpetual PoE for a camera",
            "A branch router backhauls Office 365 to the data center"
          ],
          "answer": 0,
          "why": "Offload is automatic movement between cellular and Wi-Fi, positioned as a complement to a distributed antenna system. Other examples are conference onboarding and loyalty experiences in retail or venues."
        },
        {
          "q": "How does the course separate presence from location?",
          "choices": [
            "Presence and location both require ultra-wideband and cannot use Wi-Fi",
            "Presence asks whether a device is in an area and can be answered from one access point. A position needs measurements from several access points: one gives an area, two a line, and three or more a point",
            "One access point always yields a sub-meter point",
            "Location works only if the device is associated to 6 GHz"
          ],
          "answer": 1,
          "why": "RSSI location improves when four or five access points hear the device. A connectivity design is not automatically a location design. Density, placement, overlap, and a perimeter matter."
        },
        {
          "q": "Which accuracy ranges does the course’s technology table give?",
          "choices": [
            "Wi-Fi RSSI is sub-meter in any office with one access point",
            "All three technologies have the same accuracy, so the tag cost does not matter",
            "Wi-Fi RSSI about 7 to 10 meters, or about 2 to 3 meters with fine-timing measurement; BLE about 3 to 5 meters; ultra-wideband under 1 meter",
            "BLE is always under 1 meter, and ultra-wideband is only useful beyond 50 meters"
          ],
          "answer": 2,
          "why": "Wi-Fi uses the existing network and needs no tag for a connected client. BLE tags are cheaper and common for wayfinding. Ultra-wideband is the precision option and costs more in tags and design."
        },
        {
          "q": "A logistics site shows assets in the wrong zones. Tags are transmitting and the application works. What does the review say to check first?",
          "choices": [
            "The tags were attached to the wrong assets",
            "The workflow is not sending data to the dashboard",
            "The wireless design does not provide enough signal density for the location accuracy they expect",
            "The software cannot read tag telemetry"
          ],
          "answer": 2,
          "why": "The review item rules out the application and the tags’ transmissions. Location outcomes fail when the radio foundation was designed only for coverage."
        },
        {
          "q": "Indoor wayfinding in the course most often depends on which signal, and what design target does it use?",
          "choices": [
            "A private VLAN for each visitor",
            "BLE, on a denser layout than connectivity, on the order of one access point per 1,000 square feet, with a real perimeter and overlap on corridors and stairs",
            "A single access point at the building entrance and RSSI from that one radio",
            "MPLS labels carried in the beacon"
          ],
          "answer": 1,
          "why": "Cisco Spaces supplies the map, the route, and an app-less start such as a QR code. Three access points can make a device positionable. Reliable wayfinding wants more overlap than that minimum. Ultra-wideband is reserved for tighter precision."
        },
        {
          "q": "How does ultra-wideband asset tracking find a tag in the course?",
          "choices": [
            "The tag sends short blinks. Several anchors record arrival times, and a location engine uses the time difference of arrival",
            "The tag joins the corporate SSID and is placed by its DHCP address",
            "The wireless LAN controller counts beacons and ignores time",
            "The tag’s RSSI at one access point is converted directly into a sub-meter point"
          ],
          "answer": 0,
          "why": "Uplink time difference of arrival lets the infrastructure locate the tag. Downlink time difference of arrival lets a client compute its own position. The design wants four or more anchors, not a straight line, and the course allows 5 GHz coverage as a first proxy before an on-site check."
        },
        {
          "q": "Which stack does the course show for native asset tracking?",
          "choices": [
            "Wi-Fi 7 access points with BLE and ultra-wideband radios, Cisco tags, a Cisco Spaces dashboard, and a mobile app to search and navigate",
            "A guest captive portal and no tags",
            "Only a predictive survey, with no anchors",
            "An SD-WAN controller acting as the location engine"
          ],
          "answer": 0,
          "why": "The outcome still has to match the tool. Floor-level presence can be Wi-Fi. Room-level wayfinding is commonly BLE. Sub-meter finding of a pump or a tool is the ultra-wideband case."
        },
        {
          "q": "A plant keeps one wireless network for office users and another for automated guided vehicles. Why does the course say that split existed?",
          "choices": [
            "Office Wi-Fi is built for user throughput, while the vehicles need predictable, low-loss connectivity",
            "Enterprise Wi-Fi has no spectrum left for industrial traffic",
            "The standard forbids a phone and a vehicle from using different SSIDs on one infrastructure",
            "The vehicles need a different IP subnet, and that alone forces a second radio network"
          ],
          "answer": 0,
          "why": "Industrial protocols tolerate little loss, delay, or jitter. The review answer is that difference in purpose, not addressing, spectrum exhaustion, or a ban on mixed device types."
        },
        {
          "q": "Where does ultra-reliable wireless backhaul fit, and which mechanisms does the course name?",
          "choices": [
            "Guest Internet in a retail store, using ordinary Wi-Fi only",
            "Sub-meter location of a wheelchair, which is the ultra-wideband job",
            "Replacing 802.1X on a wired closet",
            "Moving assets and places where fiber is impractical. An overlay stays stable, the next link comes up before the old one drops, failover is under 500 milliseconds, and critical traffic can be duplicated across paths"
          ],
          "answer": 3,
          "why": "URWB rides 802.11 and can run on the same access point as enterprise Wi-Fi, with the controller and Catalyst Center for management. It is the course’s choice for AGVs, yards, rail, mines, and a short building-to-building link where fiber is hard. It is not the guest network and not the office laptop network."
        }
      ]
    }
  ]
};
