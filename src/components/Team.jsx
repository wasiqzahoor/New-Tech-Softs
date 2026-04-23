import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import image1 from "../assets/team/image1.jpg";
import image2 from "../assets/team/image2.png";
import image3 from "../assets/team/image3.png";
import image4 from "../assets/team/image4.png";
import image5 from "../assets/team/image5.png";
import image6 from "../assets/team/image6.png";
import CEO from "../assets/team/CEO.png";
import {
  FaUserTie,
  FaProjectDiagram,
  FaCode,
  FaRobot,
  FaPalette,
} from 'react-icons/fa';

// ─── TEAM DATA ────────────────────────────────────────────────────────────────
// Replace img values with your actual imported images e.g. import image1 from '../assets/team/image1.jpg'
const teamMembers = [
  {
    id: 1,
    name: 'Chaudhary Wasiq Zahoor',
    role: 'Founder & CEO',
    desc: 'A visionary leader steering New Tech Softs towards technological excellence and ensuring high-impact digital solutions for global brands.',
    img: CEO, // replace with: image1
    icon: FaUserTie,
    accent: '#22d3ee',
    social: {
      linkedin: 'https://www.linkedin.com/in/chaudhary-wasiq-zahoor-bbab952b0/',
      github: 'https://github.com/wasiqzahoor',
      instagram: 'https://www.instagram.com/ch_wiqii',
    },
  },
  {
    id: 2,
    name: 'Nafeesa Arshad',
    role: 'Project Manager',
    desc: 'An experienced project manager leading teams with strategic vision, ensuring timely delivery, efficient workflows, and successful execution of high-quality digital projects.',
    img: image3, // replace with: image3
    icon: FaProjectDiagram,
    accent: '#818cf8',
    social: {
      linkedin: 'https://www.linkedin.com/in/nafeesa-arshad-4235a1364/',
      github: 'https://github.com/nafeesaawan',
      instagram: 'https://www.instagram.com/',
    },
  },
  {
    id: 3,
    name: 'Warda Riffat',
    role: 'Full Stack Developer',
    desc: 'A skilled full stack developer proficient in building scalable web applications with a focus on performance, security, and seamless user experience.',
    img: image5, // replace with: image5
    icon: FaCode,
    accent: '#34d399',
    social: {
      linkedin: 'https://www.linkedin.com/in/warda-riffat-556731317',
      github: 'https://github.com/',
      instagram: 'https://www.instagram.com/',
    },
  },
  {
    id: 4,
    name: 'Muhammad Musa',
    role: 'AI Engineer',
    desc: 'Designing, training, and deploying intelligent AI models while transforming complex data into scalable, real-world solutions that drive automation.',
    img: image2, // replace with: image2
    icon: FaRobot,
    accent: '#f472b6',
    social: {
      linkedin: 'https://www.linkedin.com/in/mussakhan-ai/',
      github: '#',
      instagram: '#',
    },
  },
  {
    id: 5,
    name: 'Malik Imran',
    role: 'Graphic Designer',
    desc: 'A creative mastermind transforming brand stories into stunning visual identities and high-quality graphics that capture attention and drive engagement.',
    img: image4, // replace with: image4
    icon: FaPalette,
    accent: '#fb923c',
    social: {
      linkedin: 'https://www.linkedin.com/in/malik-imran-13754937a/',
      github: '#',
      instagram: 'https://www.instagram.com/malik__imran_001',
    },
  },
 {
  id: 6,
  name: 'Areeba Wazeer',
  role: 'Human Resources (HR)',
  desc: 'A dedicated HR professional focused on talent acquisition, employee engagement, and organizational development. Skilled in managing workplace culture, streamlining recruitment processes, and ensuring a positive and productive work environment.',
  img: image6,
  icon: FaUserTie,
  accent: '#3fea8c',
  social: {
    linkedin: 'https://www.linkedin.com/in/areeba-wazeer-945b73368',
    github: 'https://github.com/wazeerareeba6-tech',
    instagram: '#',
  },
}
];

// ─── AVATAR FALLBACK ──────────────────────────────────────────────────────────
const AvatarFallback = ({ name, accent }) => {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, #0d1f3a 0%, #112240 100%)`,
        fontSize: '64px',
        fontWeight: 900,
        color: accent,
        letterSpacing: '-2px',
        fontFamily: "'Courier New', monospace",
        userSelect: 'none',
      }}
    >
      {initials}
    </div>
  );
};

// ─── SOCIAL LINK ──────────────────────────────────────────────────────────────
const SocialLink = ({ href, icon: Icon, label, accent }) => {
  const [hovered, setHovered] = useState(false);
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hovered ? `${accent}22` : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? accent + '66' : 'rgba(255,255,255,0.08)'}`,
        color: hovered ? accent : '#64748b',
        fontSize: '15px',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        flexShrink: 0,
      }}
    >
      <Icon />
    </a>
  );
};

// ─── TEAM CARD ────────────────────────────────────────────────────────────────
const TeamCard = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);
  const { name, role, desc, img, icon: RoleIcon, accent, social } = member;

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92, rotateX: 8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18,
        delay: index * 0.12,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 5 + index * 0.4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        variants={floatVariants}
        animate={hovered ? {} : 'float'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'linear-gradient(145deg, #112240, #0d1f3a)',
          borderRadius: '26px',
          border: hovered
            ? `1px solid ${accent}55`
            : '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
          transform: hovered
            ? 'translateY(-14px) scale(1.01)'
            : 'translateY(0) scale(1)',
          boxShadow: hovered
            ? `0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px ${accent}33, 0 0 40px ${accent}11`
            : '0 4px 24px rgba(0,0,0,0.3)',
          cursor: 'default',
        }}
      >
        {/* ── TOP GLOW ── */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '240px',
            height: '240px',
            background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
            pointerEvents: 'none',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 0,
          }}
        />

        {/* ── IMAGE SECTION ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '280px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {img ? (
            <img
              src={img}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: hovered
                  ? 'grayscale(0%) brightness(1)'
                  : 'grayscale(35%) brightness(0.82)',
                transform: hovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'filter 0.5s ease, transform 0.5s ease',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : (
            <AvatarFallback name={name} accent={accent} />
          )}

          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, transparent 35%, #0d1f3a 100%)',
              pointerEvents: 'none',
            }}
          />

          

          {/* Role pill badge */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: `${accent}18`,
              border: `1px solid ${accent}55`,
              backdropFilter: 'blur(10px)',
              borderRadius: '10px',
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: accent,
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              zIndex: 2,
              transition: 'background 0.3s',
              background: hovered ? `${accent}28` : `${accent}18`,
            }}
          >
            <RoleIcon style={{ fontSize: '12px', flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>{role}</span>
          </div>
        </div>

        {/* ── CARD BODY ── */}
        <div
          style={{
            padding: '20px 22px 22px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <h3
            title={name}
            style={{
              fontSize: '17px',
              fontWeight: 800,
              color: '#e6f1ff',
              margin: '0 0 4px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              letterSpacing: '0.2px',
            }}
          >
            {name}
          </h3>

          {/* Role text */}
          <p
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: accent,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              margin: '0 0 14px',
            }}
          >
            {role}
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background:
                'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
              marginBottom: '14px',
            }}
          />

          {/* Description */}
          <p
            style={{
              fontSize: '13px',
              color: '#8892b0',
              lineHeight: 1.78,
              flex: 1,
              margin: '0 0 18px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {desc}
          </p>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <SocialLink
              href={social.linkedin}
              icon={FaLinkedin}
              label="LinkedIn"
              accent={accent}
            />
            <SocialLink
              href={social.github}
              icon={FaGithub}
              label="GitHub"
              accent={accent}
            />
            <SocialLink
              href={social.instagram}
              icon={FaInstagram}
              label="Instagram"
              accent={accent}
            />
          </div>
        </div>

        {/* ── BOTTOM ACCENT LINE ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.4s ease',
            borderRadius: '0 0 26px 26px',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// ─── MAIN TEAM SECTION ────────────────────────────────────────────────────────
const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: '#0a192f',
        padding: '96px 20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background ambient glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── HEADER ── */}
      <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(34,211,238,0.1)',
              border: '1px solid rgba(34,211,238,0.3)',
              color: '#22d3ee',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 20px',
              borderRadius: '50px',
              marginBottom: '20px',
            }}
          >
            Our Dream Team
          </span>

          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 46px)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 16px',
              letterSpacing: '-0.5px',
            }}
          >
            Meet the Minds{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Behind the Code
            </span>
          </h2>

          <p
            style={{
              color: '#8892b0',
              fontSize: '16px',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            A dedicated squad of experts committed to delivering exceptional
            digital solutions for businesses worldwide.
          </p>
        </motion.div>
      </div>

      {/* ── GRID ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '28px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {teamMembers.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;