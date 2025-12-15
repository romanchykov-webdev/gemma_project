import { fetchHomeData } from "@/api/client";
import { Container, ProductsGroup, TopBar } from "@/components/shared";

export default async function Home() {
	let initialData = null;

	try {
		initialData = await fetchHomeData();
	} catch (error) {
		console.error("Failed to fetch home data:", error);
		// Можно вернуть ошибку или пустые данные
	}

	// Если данных нет, возвращаем ошибку
	if (!initialData) {
		return (
			<Container className="py-8">
				<div className="text-center text-red-500">Ошибка загрузки данных</div>
			</Container>
		);
	}

	// console.log(initialData);

	return (
		<>
			<TopBar categories={initialData.category} />
			<Container className="py-8">
				{/* Список товаров */}
				<div className="flex-1">
					<div className="flex flex-col gap-16">
						{(() => {
							// ✅ Вычисляем индекс первой категории с продуктами ОДИН РАЗ (вне map)
							const firstCategoryWithProductsIndex = initialData.category.findIndex(
								(cat) => cat.products.length > 0
							);

							return initialData.category.map((category, categoryIndex) => {
								const isFirstCategory = categoryIndex === firstCategoryWithProductsIndex;

								return (
									category.products.length > 0 && (
										<article id={`category-${category.id}`} key={category.id}>
											<ProductsGroup
												categoryId={category.id}
												title={category.name}
												items={category.products}
												isFirstCategory={isFirstCategory}
											/>
										</article>
									)
								);
							});
						})()}
					</div>
				</div>
				<section className="h-[500vh]"></section>
			</Container>
		</>
	);
}
