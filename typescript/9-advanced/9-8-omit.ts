{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'hello'>; // omit에서 제외할 key는 any라서 아무것이나 다 올 수 있음

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }

  type Keys = keyof Video; // Union type : keys of Video => 'id' | 'title' | , ...
  const keys: Keys = 'id';
}
