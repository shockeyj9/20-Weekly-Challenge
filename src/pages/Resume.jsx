import resume from '/downloads/2023 Resume.pdf'
export default function Resume() {
    return (
      <section>
        <h1>Resume Page</h1>

<a href={resume} download="Jessie Shockey Resume" target='_blank'>
  click to download resume
</a>
      </section>
    );
  }