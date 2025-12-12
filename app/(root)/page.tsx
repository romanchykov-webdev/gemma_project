import { fetchHomeData } from "@/api/client";
import { Container, TopBar } from "@/components/shared";

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

	console.log(initialData);

	return (
		<Container className="py-8">
			<TopBar categories={initialData.category} />

			<div className="space-y-8">
				{initialData.category.map((category) => (
					<div key={category.id}>
						<h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{category.products.map((product) => (
								<div key={product.id} className="border rounded-lg p-4">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-48 object-cover rounded mb-2"
									/>
									<h3 className="font-medium">{product.name}</h3>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
