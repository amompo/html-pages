class RailsRoutes
	# good route 
	# url: @url = 'properties/nice-place' => 'PropertiesController#show'

	# bad_route
	# url: 'properties/blip-blap' => 'PropertiesController#show'

	# saves :name in params collection
	# params[:name] =>  'a-nice-place'
	match 'properties/:name', to: 'PropertiesController#show'	 # properties/a-nice-place

	match '/', to: 'ApplicationController#cover'
end

class ApplicationController
	# params[:name] = 'a-nice-place'
	def cover
		@featured_properties = Property.featured
		render :cover
	end
end


class PropertiesController
	# params[:name] = 'a-nice-place'
	def show
		# finds values from params (of url)
		@name = params :name

		# Episode.find name: 'nice-place'
		@property = Property.find name: @name

		# we found Episode in Database? then we can show it
		if @property
			render :show
		else
			# no Episode with that name found, show all episodes instead by calling index here
			redirect :index # (all properties)
		end
	end

	def index
		# get all properties from DB
		@properties = Property.all
		render :index
	end
end
----

views
	application
		cover.html
			@featured_properties.each do |property|
				= property.name			
	properties
		show.html
			body
				div#details
					#type
						= @property.type
					#furnishment
						= @property.furnishment

				div#costs
					= = @property.total

				div#decription
					h4
						= @episode.name	
		index.html
			@properties.each do |property|
				= property.name
