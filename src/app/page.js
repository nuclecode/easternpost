import Link from'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/open-the-book">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            View Flipbook
          </button>
        </Link>
      </main>
    </div>
  );
}
