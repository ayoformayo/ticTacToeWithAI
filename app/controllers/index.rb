get '/' do
  erb :index
end

post '/' do
  p ">>>>>>>>>>>>>>>>>>"
  board params["board"].each_slice(3).to_a
  row = params["row"].to_i
  column = params["column"].to_i
  next_move("ajk")
  content_type :json
  {array: board}.to_json
end
