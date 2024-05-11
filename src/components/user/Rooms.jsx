const Rooms = () => {
  const rooms = [
    "HUB 260",
    "HUB 367",
    "HUB 379",
    "WCH 110",
    "WCH 127",
    "WCH 129",
    "WCH 136",
  ];

  return (
    <div className="font-bold p-3 rounded-lg mt-3 mb-3 bg-white shadow-xl">
      <div className="p-2">🎨 Design Rooms 🖌️</div>
      {rooms.map((room, index) => (
        <div
          key={index}
          className="inline-block p-2 rounded-lg text-newdesign-cyan-200 bg-design-green-100 mb-3 shadow mr-3"
        >
          {room}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
