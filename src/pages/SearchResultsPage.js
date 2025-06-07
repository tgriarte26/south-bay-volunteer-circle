import { useLocation, Link } from 'react-router-dom';
import searchIndex from './searchIndex';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function highlightText(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <strong key={i} className="font-bold bg-yellow-200 px-1 rounded">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function SearchResultsPage() {
  const query = useQuery().get('q')?.toLowerCase() || '';

  const filteredResults = searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.snippet.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-[#5372f0] mb-6">
          Search Results
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Showing results for: <strong className="text-gray-900">{query}</strong>
        </p>

        {filteredResults.length === 0 ? (
          <p className="text-gray-500 italic">No results found.</p>
        ) : (
          // Inside your return JSX, replace the <ul> part with this:
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResults.map(({ id, title, snippet, url }) => (
            <li
              key={id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Link
                to={url}
                className="text-2xl font-semibold text-[#5372f0] hover:text-[#5372f0] underline"
                style={{ paddingLeft: '0.3rem', color: '#5372f0', fontWeight: 800 }}
              >
                {highlightText(title, query)}
              </Link>
              <p className="mt-3 text-gray-700 leading-relaxed text-lg flex-grow"
              style={{ padding: '0.3rem'}}>
                {highlightText(snippet, query)}
              </p>
              <div className="mt-4 flex justify-end">
                <Link
                  to={url}
                  className="text-[#5372f0] font-semibold hover:underline"
                  style={{ paddingRight: '0.3rem', color: '#5372f0', fontWeight: 800 }}
                >
                  Read more &rarr;
                </Link>
              </div>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
