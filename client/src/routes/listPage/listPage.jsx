import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function ListPage() {
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">{/* <Map items={posts} /> */}</div>
    </div>
  );
}

export default ListPage;
