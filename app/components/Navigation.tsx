'use client';

import '@here/hds-components/navbar';
import '@here/hds-components/tabs';
import React, { useEffect, useRef } from 'react';

// Add custom elements to JSX namespace
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'hds-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'hds-tab-bar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'hds-navbar-top': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Navigation() {
  const tabBarRef = useRef<any>(null);

  useEffect(() => {
    const tabBar = tabBarRef.current;
    if (!tabBar) return;

    const tabs = tabBar.querySelectorAll('hds-tab');

    if (tabs[0]) {
      tabs[0].addEventListener('click', () => {
        window.location.href = '/';
      });
    }

    if (tabs[1]) {
      tabs[1].addEventListener('click', () => {
        window.location.href = 'https://www.here.com/solutions/digital-cockpit';
      });
    }

    return () => {
      tabs.forEach((tab) =>
        tab.removeEventListener('click', () => {})
      );
    };
  }, []);

  return (
    <div className="navbar-wrapper" suppressHydrationWarning>
      <hds-navbar-top data-theme="light">
        <div slot="logo" style={{ marginLeft: '14rem' }}>
          <img src="/logo.svg" width="40" height="40" alt="Logo" />
        </div>

        <div slot="tabs-menu">
          <hds-tab-bar role="menubar" ref={tabBarRef}>
            <hds-tab>
              <span className="tab-label" style={{ marginRight: '2rem' }}>
                Home
              </span>
            </hds-tab>
            <hds-tab>
              <span className="tab-label" style={{ marginRight: '2rem' }}>Digital Cockpit</span>
            </hds-tab>
            <hds-tab>
              <span className="tab-label">Lotus Emeya + HERE</span>
            </hds-tab>
          </hds-tab-bar>
        </div>

        <div slot="right-tray" style={{ marginRight: '14rem' }}>
          <a
            href="https://www.here.com/contact"
            className="btn-base btn-primary text-cta font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            联系我们
          </a>
        </div>
      </hds-navbar-top>
    </div>
  );
}