import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList
} from 'react-native';

import FilterModal from './FilterModal';
import { HorizontalClothesCard, VerticalClothesCard } from "../../components";
import { color } from 'react-native-reanimated';
import {
	FONTS,
	SIZES,
	COLORS,
	icons,
	dummyData
} from "../../constants";

const Section = ({ title, onPress, children }) => {
	return (
		<View>
			{/* Header */}
			<View
				style={{
					flexDirection: 'row',
					marginHorizontal: SIZES.padding,
					marginTop: 30,
					marginBottom: 20
				}}
			>
				<Text style={{ flex: 1, ...FONTS.h3 }}>
					{title}
				</Text>

				<TouchableOpacity
					onPress={onPress}
				>
					<Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
						Show All
					</Text>
				</TouchableOpacity>

			</View>

			{/* Content */}
			{children}
		</View>
	)
}

const Home = () => {

	const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
	const [selectedMenuType, setSelectedMenuType] = React.useState(1);
	const [popular, setPopular] = React.useState([]);
	const [recommends, setRecommends] = React.useState([]);
	const [menuList, setMenuList] = React.useState([]);

	const [showFilterModal, setShowFilterModal] = React.useState(false);

	React.useEffect(() => {
		handleChangeCategory(selectedCategoryId, selectedMenuType)
	}, []);

	//Handler

	function handleChangeCategory(categoryId, menuTypeId) {
		// Retrieve the popular menu
		let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

		// Retrieve the recommended menu
		let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

		// Find menu based on the menu type id
		let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

		// Set the popular menu based on the categoryId 
		setPopular(selectedPopular.list.filter(a => a.categories.includes(categoryId)))

		// Set the recommended menu based on the category id
		setRecommends(selectedRecommend.list.filter(a => a.categories.includes(categoryId)))

		//Set the menu based on the category id
		setMenuList(selectedMenu.list.filter(a => a.categories.includes(categoryId)))

	}

	// Render

	function renderSearch() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 40,
					alignItems: 'center',
					marginHorizontal: SIZES.padding,
					marginVertical: SIZES.base,
					paddingHorizontal: SIZES.radius,
					borderRadius: SIZES.radius,
					backgroundColor: COLORS.lightGray2,
					marginBottom: -1,
					marginTop: 20
				}}
			>
				{/* Icon */}
				<Image
					source={icons.search}
					style={{
						height: 20,
						width: 20,
						tintColor: COLORS.darkGray
					}}
				/>

				{/* Text Input */}
				<TextInput
					style={{
						flex: 1,
						marginLeft: SIZES.radius,
						color: COLORS.darkGray,
						...FONTS.body3,
					}}
					placeholder="What's dirty today..."
					placeholderTextColor={COLORS.gray3}
				/>
				{/* Filter Button */}
				<TouchableOpacity
					onPress={() => setShowFilterModal(true)}
				>
					<Image
						source={icons.filter}
						style={{
							height: 20,
							width: 20,
							tintColor: COLORS.darkGray
						}}
					/>

				</TouchableOpacity>

			</View>
		)
	}

	function renderMenuTypes() {
		return (
			<FlatList
				horizontal
				data={dummyData.menu}
				keyExtractor={item => `${item.id}`}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 30,
					marginBottom: 20
				}}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={{
							marginLeft: SIZES.padding,
							marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
						}}
						onPress={() => {
							setSelectedMenuType(item.id)
							handleChangeCategory(selectedCategoryId, item.id)
						}}
					>
						<Text
							style={{
								color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
								...FONTS.h3
							}}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			/>
		)
	}

	function renderRecommendedSection() {
		return (
			<Section
				title="Laundry At The Best Rates"
				onPress={() => console.log("Show all recommended")}
			>
				<FlatList
					data={recommends}
					keyExtractor={item => `${item.id}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<HorizontalClothesCard
							containerStyle={{
								height: 180,
								width: SIZES.width * 0.85,
								marginLeft: index == 0 ? SIZES.padding : 18,
								marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
								paddingRight: SIZES.radius,
								alignItems: 'center'
							}}
							imageStyle={{
								marginTop: 35,
								height: 150,
								width: 150
							}}
							item={item}
							onPress={() => console.log("HorizontalClothesCard")}
						/>
					)}
				/>
			</Section>
		)
	}

	function renderPopularSection() {
		return (
			<Section
				title="Popular Services"
				onPress={() => console.log("Show all popular items")}
			>
				<FlatList
					data={popular}
					keyExtractor={item => `${item.id}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<VerticalClothesCard
							containerStyle={{
								marginLeft: index == 0 ? SIZES.padding : 18,
								marginRight: index == popular.length - 1 ? SIZES.padding : 0
							}}
							item={item}
							onPress={() => console.log("Vertical Clothes Card")}
						/>
					)}
				/>
			</Section>
		)
	}

	function renderClothesCategories() {
		return (
			<FlatList
				data={dummyData.categories}
				keyExtractor={item => `${item.id}`}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							height: 55,
							marginTop: SIZES.padding,
							marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
							marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
							paddingHorizontal: 8,
							borderRadius: SIZES.radius,
							backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
						}}
						onPress={() => {
							setSelectedCategoryId(item.id)
							handleChangeCategory(item.id, selectedMenuType)
						}}
					>
						<Image
							source={item.icon}
							style={{
								marginTop: 5,
								height: 50,
								width: 50
							}}
						/>
						<Text
							style={{
								alignSelf: 'center',
								marginRight: SIZES.base,
								color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
								...FONTS.h3
							}}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			/>
		)
	}

	function renderPickUpFrom() {
		return (
			<View
				style={{
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding
				}}
			>
				<Text
					style={{
						color: COLORS.primary,
						...FONTS.body3
					}}
				>
					PICKING UP FROM
				</Text>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: SIZES.base,
						alignItems: 'center'
					}}
				>
					<Text style={{ ...FONTS.h3 }}>
						{dummyData.myProfile.address}
					</Text>
					<Image
						source={icons.down_arrow}
						style={{
							marginLeft: SIZES.base,
							height: 20,
							width: 20,
							tintColor: COLORS.primary
						}}
					/>
				</TouchableOpacity>
			</View>
		)
	}

	return (
		<View
			style={{
				flex: 1
			}}
		>
			{/* Search */}
			{renderSearch()}

			{/* Filter */}
			{showFilterModal &&
				<FilterModal
					isVisible={showFilterModal}
					onClose={() => setShowFilterModal(false)}
				/>
			}

			{/* List */}
			<FlatList
				data={menuList}
				keyExtractor={(item) => `${item.id}`}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Picking up from */}
						{renderPickUpFrom()}
						{/* Clothes Categories */}
						{renderClothesCategories()}
						{/* Popular */}
						{renderPopularSection()}
						{/* Recommended */}
						{renderRecommendedSection()}
						{/* Menu Type */}
						{renderMenuTypes()}
					</View>
				}
				renderItem={({ item, index }) => {
					return (
						<HorizontalClothesCard
							containerStyle={{
								height: 130,
								alignItems: 'center',
								marginHorizontal: SIZES.padding,
								marginBottom: SIZES.radius
							}}
							imageStyle={{
								marginTop: 20,
								height: 110,
								width: 110
							}}
							item={item}
							onPress={() => console.log("HorizontalClothesCard")}
						/>
					)
				}}
				ListFooterComponent={
					<View style={{ height: 230 }} />
				}
			/>
		</View>
	)
}

export default Home;