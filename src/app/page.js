import Link from'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/open-the-book">
          <button>
            View Flipbook
          </button>
        </Link>
      </main>
    </div>
  );
}
