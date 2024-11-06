'use client';
import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div style={{ marginTop: '40px' }}>
      <Giscus
        repo="leonardogbxv/me"
        repoId="R_kgDONJjg0g"
        category="Announcements"
        categoryId="DIC_kwDONJjg0s4CkA6M"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="pt"
        loading="lazy"
      />
    </div>
  );
}
